import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  private adminUrl="http://localhost:8080/home/admin";
  admin:Employee=new Employee();
  constructor(private http:HttpClient) { }

adminlog(admin:object):Observable<any>{
  return this.http.post<any>(this.adminUrl,admin);
}

}
