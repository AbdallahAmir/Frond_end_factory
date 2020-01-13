import { Injectable } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl="http://localhost:8080/home"; 

   employee:Employee=new Employee();

  
  
  constructor(private http:HttpClient) {
   }
createEmployee(employee:object):Observable<any>{
  return this.http.post<any>(this.employeeUrl+"/addEmployee",employee);
}
managerLogin(employee:object):Observable<any>{
  return this.http.post<any>(this.employeeUrl+"/manager",employee);
}
}
