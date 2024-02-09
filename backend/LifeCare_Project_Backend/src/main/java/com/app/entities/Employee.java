package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.InheritanceType;
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "employee")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
	@Id
	@Column(name = "empId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length=50)
	private String name;
	@Column(length=20)
	private String qualificaton;
	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	private Gender gender;
	private double salary;
	@OneToOne(cascade = CascadeType.ALL)
	private Address address;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "hire_date")
	private LocalDate hiredate;
	@Column(name = "birth_date")
	private LocalDate birthdate;
	@Column(length = 10)
	private String contactNo;
	@Column(columnDefinition = "boolean default true")
	private boolean status;
	@Column(length = 50,unique = true)
	private String email;
	@Column(length = 100,nullable = false)
	private String password;

	
}