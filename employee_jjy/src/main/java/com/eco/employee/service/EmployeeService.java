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

	public int saveEmployee(List<EmployeeDTO> employeeDTOList) {
		System.out.println("EmployeeSerivce 에서 saveEmployee 실행");
		System.out.println("employeeDTO : " + employeeDTOList);
		return employeeMapper.saveEmployee(employeeDTOList);
	}

}
