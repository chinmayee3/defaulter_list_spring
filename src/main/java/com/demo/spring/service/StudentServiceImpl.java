package com.demo.spring.service;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.spring.repository.StudentRepository;
import com.demo.spring.model.Student;

@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		
		//create list and store only whose att is less than 75
		float att_cnt=20.0f;
		List<Student> original_list=studentRepository.findAll();
		List<Student> defaulter_list=new ArrayList();
		
		
		for(int i=0;i<original_list.size();i++)
		{
			Student std=original_list.get(i);
			float perct=(std.getAttendance()/att_cnt)*100;
			System.out.println(perct+"\n");
			if(perct<75)
			{
				defaulter_list.add(std);
			}
		}
		System.out.println(defaulter_list);
		return defaulter_list;
	}

}
