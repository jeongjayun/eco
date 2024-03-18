package com.eco.employee;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;

import com.eco.employee.dto.EmployeeDTO;
import com.eco.employee.service.EmployeeService;

@Configuration
@SpringBootTest
public class saveEmployeeTest {

	@Autowired
	EmployeeService employeeService;

	@Test
	@DisplayName("직원정보 저장")
	public void saveEmployee() {
		// 날짜 데이터 변환
		String parsedLocalDateTimeNow = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHH24mmss"));

		EmployeeDTO employee1 = new EmployeeDTO();
		employee1.setEmployee_nm("eclipse");
		employee1.setEntr_dt("2024-03-12");
		employee1.setRank_nm("");
		employee1.setDel_yn("N");
		employee1.setReg_id("E20249999");
		employee1.setReg_dtm(parsedLocalDateTimeNow);
		employee1.setMod_id("E20249999");
		employee1.setMod_dtm(parsedLocalDateTimeNow);
		
		EmployeeDTO employee2 = new EmployeeDTO();
		employee2.setEmployee_nm("eclipse2");
		employee2.setEntr_dt("2024-03-12");
		employee2.setRank_nm("");
		employee2.setDel_yn("N");
		employee2.setReg_id("E20249999");
		employee2.setReg_dtm(parsedLocalDateTimeNow);
		employee2.setMod_id("E20249999");
		employee2.setMod_dtm(parsedLocalDateTimeNow);

		List<EmployeeDTO> employeeList = new ArrayList<EmployeeDTO>();
		
		employeeList.add(employee1);
		employeeList.add(employee2);
		
		System.out.println("employeeList : " + employeeList);

		int saveChk = 0;
		saveChk = employeeService.saveEmployee(employeeList);
		System.out.println(saveChk);
	}

}
