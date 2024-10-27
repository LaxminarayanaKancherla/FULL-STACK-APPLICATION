import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit
{
  employees:Employee[];

  constructor(private employeeservice : EmployeeService ,
    private router : Router) {}
  ngOnInit():void{
    this.getEmpolyees();
 
   }
  
 private getEmpolyees(){
    this.employeeservice.getEmployeesList().subscribe( data => {
        this.employees= data;
    });
  }
  employeeDetails(id : number){

    this.router.navigate([`employeedetails`,id]);

  }
  updateEmployee(id: number){
  this.router.navigate(['updateemployee',id]);
  }
  
  deleteEmployee(id:number){
        this.employeeservice.deleteEmployee(id).subscribe(data => {
             this.getEmpolyees();
          })
  }
}
