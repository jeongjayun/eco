package com.eco.employee.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eco.employee.dto.EmployeeDTO;
import com.eco.employee.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {
	private static Logger logger = LoggerFactory.getLogger("MainController.class");
	private final EmployeeService employeeService;
	
	@GetMapping("/hello") //vue 연결
	public String helloVue() {
		return "hello";
	}

	@PostMapping("/list")
	public List<EmployeeDTO> getListNotAdmin() { // 삭제여부='N'인 값만 조회됨
		List<EmployeeDTO> employeeList = employeeService.getListNotAdmin();
		return employeeList;
	}

	@PostMapping("/list/all") // 전체 조회됨
	public List<EmployeeDTO> getListByAdmin() {
		List<EmployeeDTO> employeeList = employeeService.getListByAdmin();
		return employeeList;
	}

	@PostMapping("/save")
	public int saveEmployee(@RequestBody List<EmployeeDTO> employeeDTOList) {
		int saveChk = 0;
		saveChk = employeeService.saveEmployee(employeeDTOList);
		System.out.println("saveChk = " + saveChk);
		return saveChk;

		// TODO : 다중 저장쿼리로 변경 중. 입력 시 일부 값에서 NULL 또는 값이 크다는 오류 확인됨.
	}

	@PostMapping("/delete/{employee_no}")
	public int deleteEmployee(@PathVariable("employee_no") String employee_no) {
		// 삭제할 사원의 Del_yn 을 Y로 변경, 수정일시 sysdate로 변경
		int deleteChk = 0;
		deleteChk = employeeService.deleteEmployee(employee_no);
		return deleteChk;

		// TODO : 한 번에 한 명만 삭제할 수 있음.여러 명 삭제할 수 있도록 개선필요.
	}

	@PostMapping("/search")
	public List<EmployeeDTO> postSearch(@RequestBody @RequestParam("searchType") String searchType,
			@RequestParam("data") String data, @RequestParam("checkSwitchDelYn") String checkSwitchDelYn) {

		if ("select".equals(searchType) && (data.isEmpty() || data.isBlank())) {
			// 전체 보기로 돌아가기
			if ("true".equals(checkSwitchDelYn)) {
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
			return searchEmployeeList;
		}
	}

	@ResponseBody
	@PostMapping("/over")
	public ResponseEntity<?> overRetrDt() {
		int overRetrDtEmployees = employeeService.overRetrDtEmployee();
		return new ResponseEntity<>(overRetrDtEmployees, HttpStatus.OK);
	}
}
