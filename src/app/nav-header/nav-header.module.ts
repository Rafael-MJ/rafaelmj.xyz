import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavHeaderComponent } from './nav-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from '../routing.module';

@NgModule({
  declarations: [
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    NgbModule
  ],
  exports: [
    NavHeaderComponent
  ],
  providers: [],
  bootstrap: [NavHeaderComponent]
})

export class HeaderModule { }