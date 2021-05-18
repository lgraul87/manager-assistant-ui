import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CandidateComponent } from './candidate.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';

const routes: Routes = [
    { path: '', component: CandidateComponent },
    { path: 'add-candidate', component: AddCandidateComponent },
    {path: 'edit-candidate/:id', component: EditCandidateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CandidateRoutingModule {}
