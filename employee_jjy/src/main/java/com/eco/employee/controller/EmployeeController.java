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
import lombok.extern.slf4j.Slf4j;

@Controller
@RequiredArgsConstructor
public class EmployeeController {
	private static Logger logger = LoggerFactory.getLogger("MainController.class");
	private final EmployeeService employeeService;

	@PostMapping("/getListNotAdmin")
	@ResponseBody
	public List<EmployeeDTO> getListNotAdmin() {
		List<EmployeeDTO> employeeList = employeeService.getListNotAdmin();
		return employeeList;
	}

	@PostMapping("/saveEmployee")
	@ResponseBody
	public int saveEmployee(@RequestBody List<EmployeeDTO> employeeDTOList) {
		logger.info("saveEmployee 실행");
		System.out.println("콘솔에서 입력한 값 : " + employeeDTOList);

		int saveChk = 0;
		saveChk = employeeService.saveEmployee(employeeDTOList);
		System.out.println("saveChk = " + saveChk);
		return saveChk;

		// TODO : 여러줄 입력 시 ORA-00933: SQL 명령어가 올바르게 종료되지 않았습니다.
		// TODO : select box, calendar component 적용필요
	}

	@PostMapping("/deleteEmployee/")
	public void deleteEmployee(@RequestBody EmployeeDTO employeeDTO) {
		System.out.println("삭제 할 employeeDTO" + employeeDTO);
	}
}
