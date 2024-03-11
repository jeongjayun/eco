package com.eco.employee.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.eco.employee.dto.EmployeeDTO;
import com.eco.employee.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class EmployeeController {
	private static Logger logger = LoggerFactory.getLogger("MainController.class");
	private final EmployeeService employeeService;
	
	@PostMapping("/getList")
	@ResponseBody
	public List<EmployeeDTO> getList() {
		List<EmployeeDTO> employeeList = employeeService.getList();
		return employeeList;
	}
	
	@PostMapping("/saveEmployee")
	public void saveEmployee(@RequestBody List<EmployeeDTO> employeeDTO) {
		logger.info("saveEmployee 실행");
		System.out.println("콘솔에서 입력한 값 : " + employeeDTO);
		//콘솔에서 입력한 값 받아오기 (+)
		employeeService.saveEmployee(employeeDTO);

	}
}
