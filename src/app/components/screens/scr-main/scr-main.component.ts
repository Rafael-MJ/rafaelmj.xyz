import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/RoutingUtils';
import { ScreenSupport, Screens } from 'src/app/utils/ScreenUtils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenDeviconsComponent } from '../../general/gen-devicons/gen-devicons.component';

@Component({
  selector: 'app-scr-main',
  standalone: true,
  imports: [
    commonModuleUtils,
    GenArrowsComponent,
    GenDeviconsComponent
  ],
  templateUrl: './scr-main.component.html',
  styleUrl: './scr-main.component.css'
})
export class ScrMainComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Main);
    }
  }
}
