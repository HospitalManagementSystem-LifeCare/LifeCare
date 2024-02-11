package com.app.entities;

import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "patients")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "patient_Id")
	private Integer id;

	@Column(name = "admit_status", columnDefinition = "boolean default false")
	private Boolean admitStatus;
	@Column(length=20)
	private String fname;
	@Column(length = 30)
	private String lname;
	private int age;
	@Enumerated(EnumType.STRING)
	@Column(length=10)
	private Gender gender;
	@OneToOne(cascade = CascadeType.ALL)
	private Address address;
	@OneToMany(mappedBy = "patient" ,  cascade  = CascadeType.ALL)
	private List<Health_History> history = new ArrayList<>();
	
	

	


	
}
