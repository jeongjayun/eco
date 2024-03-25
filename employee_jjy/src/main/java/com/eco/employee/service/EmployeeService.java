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
	
	public List<EmployeeDTO> searchEmployee(String searchType, String data){
		System.out.println("Controller 에서 넘어온 searchType : " + searchType);
		System.out.println("Controller 에서 넘어온 data : " + data);
		
		System.out.println("EmployeeService, searchEmployee 실행");
		
		List<EmployeeDTO> employeeList = employeeMapper.searchEmployee(searchType, data);
		System.out.println("Service 결과 : " + employeeList);
		
		return employeeList;
	}

}
