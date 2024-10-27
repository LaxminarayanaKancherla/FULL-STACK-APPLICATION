import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creeateemployee',
  templateUrl: './creeateemployee.component.html',
  styleUrls: ['./creeateemployee.component.css']
})
export class CreeateemployeeComponent {

employee : Employee = new Employee();

constructor(private employeService : EmployeeService,private router :Router){}

ngOnInit(): void
{

}

saveEmployee()
{
  this.employeService.createEmpolyee(this.employee).subscribe(data =>{
    console.log(data);
    this.gotoEmployeList();
  },
  error => console.log(error));
}

gotoEmployeList(){
 this.router.navigate(['/employees']);
}

onSubmit(){
 console.log(this.employee);

 this.saveEmployee();
}

}
