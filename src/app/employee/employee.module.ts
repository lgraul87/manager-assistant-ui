import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from '../employee/employee-routing.module';
import { MaterialModule } from '../_core/material.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule
  ],
  declarations: [EmployeeComponent, AddEmployeeComponent]
})
export class EmployeeModule { }
