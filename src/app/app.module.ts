import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UpdateFactoryComponent } from './update-factory/update-factory.component';
import { DepartmentComponent } from './department/department.component';
import { CreateShiftComponent } from './create-shift/create-shift.component';
import { SingInOutComponent } from './sing-in-out/sing-in-out.component';
import { HistoryComponent } from './history/history.component';
import { TargetComponent } from './target/target.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminPanelComponent,
    UpdateFactoryComponent,
    DepartmentComponent,
    CreateShiftComponent,
    SingInOutComponent,
    HistoryComponent,
    TargetComponent,
    MenuComponent,
    NavbarComponent,
    AdminloginComponent
          ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
