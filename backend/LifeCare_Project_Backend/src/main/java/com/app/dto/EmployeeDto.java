package com.app.dto;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToOne;

import com.app.entities.Address;
import com.app.entities.Gender;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class EmployeeDTO {
	@JsonProperty(access = Access.WRITE_ONLY)
	private int id;
	private String name;
	
	private String qualificaton;
	
	private Gender gender;
	private double salary;
	
	private Address address;
	
	private LocalDate hiredate;
	
	private LocalDate birthdate;
	
	private String contactNo;
	
	private boolean status;
	
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

}
