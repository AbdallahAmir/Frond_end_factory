import { Component, OnInit } from '@angular/core';
import { Employee, HttpClientService} from '../http-client.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'sing-in-out',
  templateUrl: './sing-in-out.component.html',
  styleUrls: ['./sing-in-out.component.scss']
})
export class SingInOutComponent implements OnInit {

  employees: Employee[];

  emp: Employee;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => {this.employees = response; }
    );
  }

  insertSign(employee_id:number){
    this.httpClientService.insertSign(employee_id).subscribe(response=>{
      console.log(response);

    });
  }

  insertSignout(employee_id:number){
    this.httpClientService.insertSignout(employee_id).subscribe(response=>{
      console.log(response);

    });
  }


}
