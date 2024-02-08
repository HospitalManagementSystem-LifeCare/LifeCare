package com.app.services;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.app.dao.DoctorDao;
import com.app.dto.DoctorDto;
import com.app.dto.EmployeeDto;
import com.app.entities.Doctor;

@Service
@Transactional
public class DoctorServiceImpl {
	private DoctorDao docDao;
	private ModelMapper mapper;
	 public DoctorDto createDoctor(@Valid  DoctorDto doc) {
		 Doctor persistentDoctor = mapper.map(doc, Doctor.class);
		return mapper.map(docDao.save(persistentDoctor),DoctorDto.class);
	}

}
