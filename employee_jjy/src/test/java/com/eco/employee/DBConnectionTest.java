package com.eco.employee;


import java.sql.Connection;

import javax.sql.DataSource;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;


@SpringBootTest
@ContextConfiguration(locations = { "file:src/main/resources/mapper/employee-mapper.xml" })
public class DBConnectionTest {

	@Autowired
	private DataSource ds;
	//TODO : javax 는 spring 3.x 부터 지원안함. 맞는 import 찾기(-)

	@Test
	//result : 의존성 문제로 연결테스트 실패 확인됨.
	public void testConnection() {
		try (Connection con = ds.getConnection()) {
			System.out.println("DB연결 성공");
		} catch (Exception e) {
			System.out.println("DB연결 실패");
			e.printStackTrace();
		}
	}

}
