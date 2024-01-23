import { NavDeviconsComponent } from './nav-devicons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../../../utils/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavDeviconsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    NgbModule
  ],
  exports: [
    NavDeviconsComponent
  ],
  providers: [],
  bootstrap: [NavDeviconsComponent]
})
export class NavDevIconsModule { }