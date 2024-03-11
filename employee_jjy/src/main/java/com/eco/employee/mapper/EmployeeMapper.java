package com.eco.employee.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.eco.employee.dto.EmployeeDTO;

@Mapper
public interface EmployeeMapper {
	
	List<EmployeeDTO> getList();
	
	void saveEmployee(List<EmployeeDTO> employeeDTO);

}
