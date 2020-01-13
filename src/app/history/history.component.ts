import { Shift, HttpClientService, Employee, Sign } from './../http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  signs: Sign[];
  employees: Employee[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getSigns().subscribe(
      response => {this.signs = response; }
    );
    this.httpClientService.getEmployees().subscribe(
      response => {this.employees = response; }
    );
  }

}
