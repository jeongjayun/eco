package com.eco.employee.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
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

	@PostMapping("/getListNotAdmin") // 삭제여부='N'인 값만 조회됨
	@ResponseBody
	public List<EmployeeDTO> getListNotAdmin() {
		List<EmployeeDTO> employeeList = employeeService.getListNotAdmin();
		return employeeList;
	}

	@PostMapping("/saveEmployee")
	@ResponseBody
	public int saveEmployee(@RequestBody List<EmployeeDTO> employeeDTOList) {
		logger.info("saveEmployee 실행");
		System.out.println("클라이언트에서 입력한 값 : " + employeeDTOList);

		int saveChk = 0;
		saveChk = employeeService.saveEmployee(employeeDTOList);
		System.out.println("saveChk = " + saveChk);
		return saveChk;

		// TODO : 여러줄 입력 시 ORA-00933: SQL 명령어가 올바르게 종료되지 않았습니다.
		// TODO : datepicker 사용 후 entr, retr 의 수치부적합 오류 확인. 해결(-)
	}

	@PostMapping("/deleteEmployee/{employee_no}")
	@ResponseBody
	public int deleteEmployee(@PathVariable("employee_no") String employee_no) {
		System.out.println("클라이언트에서 삭제 할 employee_no : " + employee_no);

		// 1. 삭제할 사원 검색
		EmployeeDTO searchEmployee = employeeService.searchEmployeeByEmployeeNo(employee_no);
		System.out.println("searchEmploye : " + searchEmployee);

		// 2. 삭제할 사원의 Del_yn 을 Y로 변경, 수정일시 sysdate로 변경
		int deleteChk = 0;
		deleteChk = employeeService.deleteEmployee(searchEmployee);
		System.out.println("deleteChk = " + deleteChk);
		return deleteChk;

		// TODO : 한 번에 한 명만 삭제할 수 있음.여러 명 삭제할 수 있도록 개선필요.
	}
}
