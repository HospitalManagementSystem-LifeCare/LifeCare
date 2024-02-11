package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EmpDao;
import com.app.dto.EmployeeDTO;
import com.app.entities.Employee;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmpDao empDao;
	@Autowired
	private ModelMapper mapper;
	@Override
	public List<EmployeeDTO> getAllEmps() {
		List<EmployeeDTO> li=new ArrayList<>();
		
		
				empDao.findAll().stream().map((emp)->mapper.map(emp, EmployeeDTO.class)).forEach((emp)->li.add(emp));
				return li;
		 
	}

}
