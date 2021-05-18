import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateComponent } from './candidate.component';
import { CandidateRoutingModule } from './candidate-routing.module';
import { MaterialModule } from '../_core/material.module';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';

@NgModule({
  imports: [
    CommonModule,
    CandidateRoutingModule,
    MaterialModule
  ],
  declarations: [CandidateComponent, AddCandidateComponent, EditCandidateComponent]
})
export class CandidateModule { }
