import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { MaterialModule } from '../_core/material.module';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';

@NgModule({
  imports: [
    CommonModule,
    CandidateRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CandidateComponent, AddCandidateComponent, EditCandidateComponent, DeleteCandidateComponent]
})
export class CandidateModule { }
