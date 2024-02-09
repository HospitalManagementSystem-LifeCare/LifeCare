package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Employee;

public interface EmpDao extends JpaRepository<Employee, Integer> {
	List<Employee> findByStatus(int status);

}
