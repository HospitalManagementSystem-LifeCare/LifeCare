package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "doc_id","appDate","appTime" }) })
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="appointment_id")
	private int id;
	@OneToOne
	@JoinColumn(name = "doc_id")
	private Doctor doctor;
	@OneToOne
	@JoinColumn(name = "pat_id")
	private Patient patient;
	@Column(name = "appDate")
	private LocalDate appointmentDate;
	@Column(name = "appTime")
	private LocalTime appointmentTime;

}
