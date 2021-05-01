import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from '../employee/employee-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
