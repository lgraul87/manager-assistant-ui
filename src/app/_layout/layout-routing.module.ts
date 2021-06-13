import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { LoginGuard } from '../_shared/guards/login.guard';
import { RoleGuard } from '../_shared/guards/role.guard';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {
                path: 'candidates',
                loadChildren: () => import('../candidate/candidate.module').then(m => m.CandidateModule),
                canActivate: [LoginGuard, RoleGuard],
                data: {
                    roles: ['admin', 'rrhh']
                }
            },
            {
                path: 'employees',
                loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule),
                canActivate: [LoginGuard, RoleGuard],
                data: {
                    roles: ['admin', 'finance']
                }
            },
            { path: '**', redirectTo: '/candidates' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
