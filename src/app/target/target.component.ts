import { Component, OnInit } from '@angular/core';
import { Employee, HttpClientService, Sign, Shift } from '../http-client.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  signs: Sign[];
  employees: Employee[];
  sign: Sign;
  shift: Shift;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getSigns().subscribe(
      response => {this.signs = response; }
    );
    this.httpClientService.getEmployees().subscribe(
      response => {
        this.employees = response;
      }
    );
    this.httpClientService.getShifts().subscribe(
      response => {
        this.shift = response;
      }
    );
  }

}
