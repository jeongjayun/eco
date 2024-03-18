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
		System.out.println("Service에서 확인한 employeeDTOList : " + employeeDTOList);
		return employeeMapper.saveEmployee(employeeDTOList);
	}
	
	public int deleteEmployee(EmployeeDTO employeeDTO) {
		System.out.println("EmployeeService에서 deleteEmployee 실행");
		return employeeMapper.deleteEmployee(employeeDTO);
	}
	
	public EmployeeDTO searchEmployeeByEmployeeNo(String employee_no) {
		System.out.println("EmployeeService 에서 employee_no로 사원찾기");
		return employeeMapper.searchEmployeeByEmployeeNo(employee_no);
	}

}
