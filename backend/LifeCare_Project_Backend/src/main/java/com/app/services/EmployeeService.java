package com.app.services;

import java.util.List;

import com.app.dto.EmployeeDTO;
import com.app.entities.Employee;

public interface EmployeeService {

	List<EmployeeDTO> getAllEmps();

}
