import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl ="http://localhost:8080/api/v1/employees";
  constructor(private  _httpclient : HttpClient ) {}

    getEmployeesList(): Observable<Employee[]>{
      return this._httpclient.get<Employee[]>(`${this.baseUrl}`);
    }
     

    createEmpolyee(empolyee :Employee):Observable<Object>
    {
         return this._httpclient.post(`${this.baseUrl}`,empolyee);
    }
    getEmployeeById(id:number):Observable<Employee>{
      return this._httpclient.get<Employee>(`${this.baseUrl}/${id}`);
    }
    updateEmployee(id:number,employee:Employee){
      return this._httpclient.put(`${this.baseUrl}/${id}`,employee);
    }

    deleteEmployee(id: number):Observable<Object>{
      return this._httpclient.delete(`${this.baseUrl}/${id}`);
    }
}

