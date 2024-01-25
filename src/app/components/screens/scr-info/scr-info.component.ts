import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreensUtil';
import { Screens } from 'src/app/utils/ScreensUtil';

@Component({
  selector: 'app-scr-info',
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
