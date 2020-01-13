import { RegisterComponent } from './register/register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TargetComponent } from './target/target.component';
import { UpdateFactoryComponent } from './update-factory/update-factory.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CreateShiftComponent } from './create-shift/create-shift.component';
import { SingInOutComponent } from './sing-in-out/sing-in-out.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


const routes: Routes = [

  { path : 'nav' , component : NavbarComponent },
  { path : 'menu' , component : MenuComponent },
  { path : 'upFactory' , component : UpdateFactoryComponent },
  { path : 'cu' , component : RegisterComponent },
  { path : 'cs' , component : CreateShiftComponent },
  { path : 'sio' , component : SingInOutComponent },
  { path : 'hist' , component : HistoryComponent },
  { path : 'trgt' , component : TargetComponent },
  { path : 'looo' , component : LoginComponent },
  { path : 'login' , component : LoginComponent },
  { path : '' , component : AdminloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

