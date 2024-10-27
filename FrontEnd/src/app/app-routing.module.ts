import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreeateemployeeComponent } from './creeateemployee/creeateemployee.component';
import { UpadateEmployeeComponent } from './upadate-employee/upadate-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [

  
  {
    path:'employees',
    component: EmployeeListComponent
   },
   
  {
    path:'create',
    component: CreeateemployeeComponent
   },

   {
    path:'',
    redirectTo:'employees',
    pathMatch:'full'
   },
   {
    path:'updateemployee/:id',
    component: UpadateEmployeeComponent
   },
   {
    path:'employeedetails/:id',
    component: EmployeeDetailsComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
