import { Department, HttpClientService } from './../http-client.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  //@Input() user: Department = new Department(0, '', '', 0);
        //department: Department = new Department();
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }
/*
  createDepartment() {
    //this.user = new Department(1, this.departmentName, this.speciality, this.factory);

    this.httpClientService.createDepartment(this.department).subscribe(res=>{

      if (!(res==null)){
      console.log(res)
      }
      
      error=>console.log("error")
      
      

      
      
      });
  }*/

}
