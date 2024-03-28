package com.eco.employee.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.eco.employee.dto.EmployeeDTO;

@Mapper
public interface EmployeeMapper {

	List<EmployeeDTO> getListNotAdmin();

	List<EmployeeDTO> getListByAdmin();

	int saveEmployee(List<EmployeeDTO> employeeDTOList);

	int deleteEmployee(String employee_no);

	EmployeeDTO searchEmployeeByEmployeeNo(String employee_no);

	List<EmployeeDTO> searchEmployee(@Param("searchType") String searchType, @Param("data") String data, @Param("checkSwitchDelYn") String checkSwitchDelYn);

	int overRetrDtEmployee();
}
