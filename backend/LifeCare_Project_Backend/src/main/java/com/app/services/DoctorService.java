package com.app.services;

import javax.validation.Valid;

import com.app.dto.DoctorDto;
import com.app.dto.EmployeeDto;
import com.app.entities.Doctor;

public interface DoctorService {
	 DoctorDto createDoctor(@Valid DoctorDto doc);
}
