package com.eco.employee.vueTest;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GetVueTestRespDto {
	private String str;
	private int code = ResCode.SUCCESS.value();
	private String message;
}
