import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
  ]
})
export class EmployeeModule { }
