import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../Employee';

@Component({
  // tslint:disable-next-line: component-selector
  selector: ' login ' ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auto = true;
emp: Employee =new Employee()
;
  constructor(private rout: Router,private employeeService:EmployeeService ) { }

    go() {
      // tslint:disable-next-line: triple-equals
      if (this.auto == true) {
      this.rout.navigate(['/menu']);
      }
    }

  ngOnInit() {
  } 
managerlogin(){
return this.employeeService.managerLogin(this.emp).subscribe(res=>{

if (!(res==null)){
console.log(res)
  this.rout.navigate(['/hist']);


}else{
  this.rout.navigate(['/login']);
}

error=>console.log("error")






})



}



}



