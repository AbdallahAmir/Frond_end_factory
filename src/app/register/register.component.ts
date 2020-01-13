import { Component, OnInit, Injectable } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClientService } from '../http-client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   employee:Employee = new Employee();
   

  constructor(private httpClientService: HttpClientService) { }
  ngOnInit() {}

 createEmployee() {
   
  this.httpClientService.createEmployee(this.employee).subscribe(Response => {
     console.log(Response);

  });

  }
}
