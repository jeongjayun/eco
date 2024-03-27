package com.eco.employee.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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

	@PostMapping("/getListByAdmin") // 전체 조회됨
	@ResponseBody
	public List<EmployeeDTO> getListByAdmin() {
		List<EmployeeDTO> employeeList = employeeService.getListByAdmin();
		return employeeList;
	}

	@PostMapping("/saveEmployee")
	@ResponseBody
	public int saveEmployee(@RequestBody List<EmployeeDTO> employeeDTOList) {
		logger.info("saveEmployee 실행");
		System.out.println("클라이언트에서 입력한 값 : " + employeeDTOList);

		int saveChk = 0;
		saveChk = employeeService.saveEmployee(employeeDTOList);
		System.out.println("service 시행 후의 employeeDTOLIST : " + employeeDTOList);
		System.out.println("saveChk = " + saveChk);
		return saveChk;

		// TODO : 다중 저장쿼리로 변경 중. 입력 시 일부 값에서 NULL 또는 값이 크다는 오류 확인됨.

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

	@PostMapping("/search")
	@ResponseBody
	public List<EmployeeDTO> postSearch(@RequestBody @RequestParam("searchType") String searchType,
			@RequestParam("data") String data, @RequestParam("checkSwitchDelYn") String checkSwitchDelYn) {
		System.out.println("클라이언트에서 선택한 검색 카테고리 : " + searchType);
		System.out.println("클라이언트에서 입력한 검색어 : " + data);
		System.out.println("클라이언트에서 받아온 checkSwitchDelYn : " + checkSwitchDelYn);

		if ("select".equals(searchType) && (data.isEmpty() || data.isBlank())) {
			// 전체 보기로 돌아가기 
			if("true".equals(checkSwitchDelYn)) {
				// 삭제 항목 포함된 경우 
				List<EmployeeDTO> employeeList = employeeService.getListByAdmin();
				return employeeList;
			} else {
				// 아닌 경우
				List<EmployeeDTO> employeeList = employeeService.getListNotAdmin();
				return employeeList;
			}
		} else {
			List<EmployeeDTO> searchEmployeeList = employeeService.searchEmployee(searchType, data, checkSwitchDelYn);
			System.out.println("EmployeeService 에서 반환한 값 : " + searchEmployeeList);
			return searchEmployeeList;
		}
	}
}
