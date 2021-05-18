import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
    { path: '', component: EmployeeComponent },
    { path: 'add-employee', component: AddEmployeeComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {}
