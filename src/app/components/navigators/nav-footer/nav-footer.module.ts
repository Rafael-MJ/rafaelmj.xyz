import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavFooterComponent } from './nav-footer.component';
import { RoutingModule } from '../../../utils/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavFooterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    NgbModule
  ],
  exports: [
    NavFooterComponent
  ],
  providers: [],
  bootstrap: [NavFooterComponent]
})

export class FooterModule { }