package com.app.entities;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_Id")
	Integer id;
	@Column(name = "first_name",length = 40,nullable = false)
	private String firstName;
	@Column(name = "last_name",length = 40,nullable = false)
	private String lastName;
	@Column(length = 40,unique = true)
	private String email;
	@Column(length = 100,nullable = false)
	private String password;
	@Column(length=20)
	private String gender;
	@Column(name = "security_que", length = 100, nullable = false)
	private String securityQue;

	@Column(name = "security_ans", length = 100, nullable = false)
	private String securityAns;

	@Column(name = "mobile_no", length = 15)
	private String mobileNo;

	@Column(name = "blood_group", length = 10)
	private String bloodGroup;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	private Patient patient;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	private Employee employee;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Address address;

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user", referencedColumnName = "user_Id"), inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "id"))
	private Set<Role> roles = new HashSet<>();

}
