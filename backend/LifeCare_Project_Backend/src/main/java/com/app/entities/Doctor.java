package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "doctor")
@PrimaryKeyJoinColumn(name = "empId")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Doctor extends Employee {
	

	@Column(name = "doctor_fee", nullable = false, length = 100)
	private double doctorFee;

	@Column(name = "scheduled_start_time")
	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime startTime;

	@Column(name = "scheduled_end_time")
	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime endTime;
	
	@ManyToMany
	@JoinTable(name = "doc_availability", joinColumns = @JoinColumn(name = "doc_id", nullable = false), inverseJoinColumns = @JoinColumn(name = "a_id", nullable = false))
	private List<ADate> availability;

	
}
