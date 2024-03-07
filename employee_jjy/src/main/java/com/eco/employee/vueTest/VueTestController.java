package com.eco.employee.vueTest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VueTestController {
	@GetMapping("/api/vueTest")
	public GetVueTestRespDto hello() {
		GetVueTestRespDto getVueTestRespDto = new GetVueTestRespDto();
		getVueTestRespDto.setStr("hello!");
		return getVueTestRespDto;
	}

}
