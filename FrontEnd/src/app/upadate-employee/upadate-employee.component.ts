import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upadate-employee',
  templateUrl: './upadate-employee.component.html',
  styleUrls: ['./upadate-employee.component.css']
})
export class UpadateEmployeeComponent {
  employee:Employee ;
  id: any;
  constructor(private employeservice :EmployeeService, private activatedroute :ActivatedRoute, private router :Router
  ){}
ngOnInit():void
{
 
  this.id=this.activatedroute.snapshot.params['id'];

  this.employeservice.getEmployeeById(this.id).subscribe(data =>{
    this.employee= data;

  },error => console.log(error));
}

onSubmit(){
  this.employeservice.updateEmployee(this.id,this.employee).subscribe(data =>{
   this.gotoEmployeList();
  })
}
gotoEmployeList(){
  this.router.navigate(['/employees']);
 }

}
