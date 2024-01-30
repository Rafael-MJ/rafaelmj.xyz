import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/RoutingUtils';
import { ScreenSupport } from 'src/app/utils/ScreenUtils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';

@Component({
  selector: 'app-scr-notfound',
  standalone: true,
  imports: [
    commonModuleUtils,
    GenArrowsComponent
  ],
  templateUrl: './scr-notfound.component.html',
  styleUrl: './scr-notfound.component.css'
})
export class ScrNotfoundComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(null);
    }
  }
}
