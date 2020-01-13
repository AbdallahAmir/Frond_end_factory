import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    log = true;


  constructor(private rout: Router) { }

  ngOnInit() {
  }

  login() {
    // tslint:disable-next-line: triple-equals
    if (this.log == true) {
    this.rout.navigate(['/'])
    }
  }

}
