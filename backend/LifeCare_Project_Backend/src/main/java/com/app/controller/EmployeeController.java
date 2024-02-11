package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EmployeeDTO;
import com.app.entities.Employee;
import com.app.services.EmployeeService;

@RestController
@RequestMapping("/emp")
public class EmployeeController {
	@Autowired
	private EmployeeService empService;
	
	@GetMapping("/all")
	public List<EmployeeDTO> getAllEmps() {
		return	empService.getAllEmps();
		 
	}

}
