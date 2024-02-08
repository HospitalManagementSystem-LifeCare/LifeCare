package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DoctorDto;
import com.app.entities.Doctor;
import com.app.services.DoctorServiceImpl;

@RestController
@RequestMapping("/api")
public class DoctorController {

	@Autowired
	private DoctorServiceImpl doctorService;

	// create doctor
	@PostMapping("/doctor")
	public ResponseEntity<DoctorDto> createDoctor(@Valid @RequestBody DoctorDto doc) {
		DoctorDto createDoctor = this.doctorService.createDoctor(doc);
		return new ResponseEntity<DoctorDto>(createDoctor, HttpStatus.CREATED);
	}

}