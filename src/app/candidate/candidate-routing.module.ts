import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CandidateComponent } from './candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';

const routes: Routes = [
    { path: '', component: CandidateComponent },
    { path: 'add-candidate', component: AddCandidateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CandidateRoutingModule {}
