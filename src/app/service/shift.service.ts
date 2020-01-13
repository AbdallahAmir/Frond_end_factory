import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shift } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

 private  shifturl="http://localhost:8080/shift";
 private  updateurl="http://localhost:8080/shift/update/";
  
  constructor(private httpclient:HttpClient) { 

  }
  getShift(shiftid:Number):Observable<any>{
   return this.httpclient.get(`${this.shifturl}`)
  }
  updateShift(shiftid:Number,shift:Shift):Observable<any>{
    return this.httpclient.put(`${this.updateurl}`,shift)
   }
}
