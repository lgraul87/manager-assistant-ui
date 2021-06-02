import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
    { path: 'add-employee', component: AddEmployeeComponent },
    { path: 'edit-employee/:id', component: EditEmployeeComponent },
    { path: '', component: EmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {}
