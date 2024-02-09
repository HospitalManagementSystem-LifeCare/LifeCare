package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Employee;
import com.app.entities.Patient;
import com.app.services.EmployeeService;
import com.app.services.PatientService;

@RestController
@RequestMapping("/patient")
public class PatientController {
	
	@Autowired
	private PatientService patService;
	
	@GetMapping("/all")
	public List<Patient> getAllPatients() {
		return	patService.getAllPatients();
		 
	}

}
