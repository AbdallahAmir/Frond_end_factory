import { Component, OnInit, Input } from '@angular/core';
import { Shift } from '../Shift';
import { HttpClientService } from '../http-client.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'create-shift',
  templateUrl: './create-shift.component.html',
  styleUrls: ['./create-shift.component.scss']
})
export class CreateShiftComponent implements OnInit {

  shift: Shift = new Shift();
  
  
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  updateShift() {
    //this.shift = new Shift(1, this.shift_from, this.shift_to, this.workingDays);
    debugger
    this.httpClientService.createShift(this.shift).subscribe( Response => {
      debugger
        console.log('Shifts Created successfully.');
      });
  }

}
