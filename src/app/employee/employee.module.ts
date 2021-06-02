import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from '../employee/employee-routing.module';
import { MaterialModule } from '../_core/material.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [EmployeeComponent, AddEmployeeComponent,EditEmployeeComponent,DeleteEmployeeComponent]
})
export class EmployeeModule { }
