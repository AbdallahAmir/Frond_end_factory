import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factory } from '../entities/Factory';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

 private  factoryurl="http://localhost:8080/factory/1";
 private  updateurl="http://localhost:8080/factory/update/1";
  
  constructor(private httpclient:HttpClient) { 

  }
  getFactory(factoryid:Number):Observable<any>{
   return this.httpclient.get(`${this.factoryurl}`)
  }
  updateFactory(factoryid:Number,fact:Factory):Observable<any>{
    return this.httpclient.put(`${this.updateurl}`,fact)
   }
}
