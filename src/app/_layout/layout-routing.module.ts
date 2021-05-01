import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: 'candidates', loadChildren: () => import('../candidate/candidate.module').then(m => m.CandidateModule) },
            { path: 'employees', loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule) },
            { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
            { path: '**', redirectTo: '/candidates' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
