import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { Employee } from '../Employee';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent  {
  private email:string;
  private password:string;
  auto:boolean=false;
  private admin:Employee=new Employee();
  constructor(private adminlogin:AdminloginService,private rout:Router) { }

  
//  adminlogin(){
//   if(this.email=="admin"&&this.password=="admin"){
//       this.rout.navigate(['/menu'])
//   }
//   else{
//     alert("invalid email and password")
//   }

//  }

login(admin:Employee)
{
return this.adminlogin.adminlog(admin).subscribe(result =>
  {console.log(result)
  
  if(!(result==null))
  {
    this.auto=true;
    this.rout.navigate(['/menu']);
  }
  
  
  });



  }

  go() {
    // tslint:disable-next-line: triple-equals
    if (this.auto == false) {
    this.rout.navigate(['/login']);
    }

}


}
