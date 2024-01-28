import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';
import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';

@Component({
  selector: 'app-scr-info',
  standalone: true,
  imports: [
    commonModuleUtils,
    GenArrowsComponent
  ],
  templateUrl: './scr-info.component.html',
  styleUrls: ['./scr-info.component.css']
})
export class ScrInfoComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Info);
    }
  }
}
