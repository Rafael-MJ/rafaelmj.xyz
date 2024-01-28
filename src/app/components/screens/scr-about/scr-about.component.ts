import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';
import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';

@Component({
  selector: 'app-scr-about',
  standalone: true,
  imports: [
    commonModuleUtils,
    GenArrowsComponent
  ],
  templateUrl: './scr-about.component.html',
  styleUrls: ['./scr-about.component.css']
})

export class ScrAboutComponent {

  constructor() { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.About);
    }
  }
}
