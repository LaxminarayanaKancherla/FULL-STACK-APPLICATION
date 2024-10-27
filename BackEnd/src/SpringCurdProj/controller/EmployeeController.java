package com.SpringCurdProj.controller;



import org.springframework.web.bind.annotation.RestController;

import com.SpringCurdProj.execption.ResourceNotFoundException;
import com.SpringCurdProj.model.Employee;
import com.SpringCurdProj.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController
{
	@Autowired
  private EmployeeRepository  employeeDao;
	
	//getting all employess list
	@GetMapping("/employees")
	public List<Employee>  getAllEmployees()
	{
		return employeeDao.findAll();
	
	}
	
	///posting or adding new employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee empolyee) {
		
		return employeeDao.save(empolyee);
		
	}
	
	///finding or getting employee details with id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id)
	{
		Employee employee=  employeeDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :"+id) );
		return ResponseEntity.ok(employee);
	}
	
	//update employee 
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails){
		
		Employee employee=  employeeDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :"+id) );
	
		
		employee.setFirstname(employeeDetails.getFirstname());
		employee.setLastname(employeeDetails.getLastname());
		employee.setEmailId(employeeDetails.getEmailId());
		
		Employee updateEmployee = employeeDao.save(employee);
		return ResponseEntity.ok(updateEmployee);
		
	}
	
	//delete employee form the list
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee=  employeeDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :"+id) );
		 employeeDao.delete(employee);
		 Map<String, Boolean> response= new HashMap<>();
		 response.put("deleted", Boolean.TRUE);
		 return ResponseEntity.ok(response);
	}
	
}
