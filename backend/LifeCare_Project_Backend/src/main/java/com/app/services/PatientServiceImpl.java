package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PatientDao;
import com.app.entities.Patient;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {
	@Autowired
	private PatientDao pDao;

	@Override
	public List<Patient> getAllPatients() {
		
		return pDao.findAll();
	}

}
