import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../_core/material.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule { }
