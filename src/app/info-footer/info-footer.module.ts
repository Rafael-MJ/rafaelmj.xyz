import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoFooterComponent } from './info-footer.component';
import { RoutingModule } from '../routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    InfoFooterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    NgbModule
  ],
  exports: [
    InfoFooterComponent
  ],
  providers: [],
  bootstrap: [InfoFooterComponent]
})

export class InfoFooterModule { }