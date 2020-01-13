import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { $ } from 'protractor';
import { Factory } from './entities/Factory';

export class Employee {

    constructor(
        public id: number,
        public employee_name: string,
        public employee_address: string,
        public contacts: string,
        public employee_email: string,
        public salary: number,
        public password: string,
        public department: string,
        public shift: string,
        public product: string,
      ) {}

}

// export class Factory {

//     constructor(
//         public id: number,
//         public factory_name: string,
//         public buildings: number,
//         public floors: number,
//         public industry: string,
//         public location: string,
//         public owenrname: string,
//     ) {}
// }

export class Department {

    constructor(
        public id: number,
        public name: string,
        public speciality: string,
        public factor: number
    ) {}
}

export class Product {

    constructor(
        public id: number,
        public name: string,
        public target: number,
        public type :string
    ) {}
}

export class Sign {
    constructor(
        public id: number,
        public sign_in: Date,
        public sign_out: Date,
        public employee:string,
    ){}
}

 export class Shift{
     constructor(
     shift_id: number,
     shift_from:number,
     shift_to:number,
     working_days:number){}
 }



@Injectable({
    providedIn: 'root'
  })
  export class HttpClientService {
    constructor(private httpClient: HttpClient) { }
    getEmployees() {
      return this.httpClient.get<Employee[]>('http://localhost:8080/home' + '/all');
    }

    public deleteEmployee(employee) {
      return this.httpClient.delete<Employee>('http://localhost:8080/home' + '/delete/' + employee.recid);
    }
    public createEmployee(employee: Employee) {
      return this.httpClient.post<Employee>('http://localhost:8080/home/addEmployee', employee);
    }
    public getSigns() {
        return this.httpClient.get<Sign[]>('http://localhost:8080/sign' + '/all');
    }
    public createFactory(factory: Factory) {
        return this.httpClient.post<Factory>('http://localhost:8080/factory/save', factory);
    }
    getDepartments() {
        return this.httpClient.get<Department[]>('http://localhost:8080/department' + '/all');
    }
    public createDepartment(department: Department) {
        return this.httpClient.post<Department>('http://localhost:8080/departments/save', department);
    }
    public deleteDepartment(department) {
        return this.httpClient.delete<Department>('http://localhost:8080/department' + '/delete/' + department.recid);
      }
      public getShifts(){
          return this.httpClient.get<Shift[]>('http://localhost:8080/shift' + '/all');
      }

      public createShift(shift: Shift){
          return this.httpClient.post<Shift>('http://localhost:8080/shift/create' ,shift);
      }

      public updateShift(shiftid: number, shift: Shift){
        return this.httpClient.put<Shift>('http://localhost:8080/shift/update'+shiftid ,shift);
    }

     public insertSign(employeeid: number){
         return this.httpClient.post<Sign>('http://localhost:8080/sign/signin/'+employeeid,null);
     }
      
     public insertSignout(employeeid: number){
        return this.httpClient.put<Sign>('http://localhost:8080/sign/out/'+employeeid,null);
    }
  }
