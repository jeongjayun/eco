package com.eco.employee.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.eco.employee.dto.EmployeeDTO;
import com.eco.employee.mapper.EmployeeMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {

	private final EmployeeMapper employeeMapper;

	public List<EmployeeDTO> getListNotAdmin() {
		return employeeMapper.getListNotAdmin();
	}

	public List<EmployeeDTO> getListByAdmin() {
		return employeeMapper.getListByAdmin();
	}

	public int saveEmployee(List<EmployeeDTO> employeeDTOList) {
		return employeeMapper.saveEmployee(employeeDTOList);
	}

	public int deleteEmployee(EmployeeDTO employeeDTO) {
		return employeeMapper.deleteEmployee(employeeDTO);
	}

	public EmployeeDTO searchEmployeeByEmployeeNo(String employee_no) {
		return employeeMapper.searchEmployeeByEmployeeNo(employee_no);
	}

	public List<EmployeeDTO> searchEmployee(String searchType, String data) {
		System.out.println("Controller 에서 넘어온 searchType : " + searchType);
		System.out.println("Controller 에서 넘어온 data : " + data);

		System.out.println("EmployeeService, searchEmployee 실행");
		
		// 입력값과 DB의 표시된 값이 다른 경우 예외처리
		if ("WRK_TYP_CD".equals(searchType)) {
			System.out.println("searchType 으로 근무형태코드가 들어온 경우");

			String strData = switch (data) {
			case "출근" -> "01";
			case "외근" -> "02";
			case "파견" -> "03";
			case "휴가" -> "04";
			default -> throw new IllegalArgumentException("Unexpected value: " + data);
			};
			
			System.out.println("입력된 data : " + data +"-> strData 변환 : " +  strData);

			List<EmployeeDTO> employeeList = employeeMapper.searchEmployee(searchType, strData);
			System.out.println("Service 결과 : " + employeeList);

			return employeeList;

		} else {

			List<EmployeeDTO> employeeList = employeeMapper.searchEmployee(searchType, data);
			System.out.println("Service 결과 : " + employeeList);

			return employeeList;
		}
	}

}
