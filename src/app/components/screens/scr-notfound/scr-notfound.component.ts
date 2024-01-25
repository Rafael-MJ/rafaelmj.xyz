import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreensUtil';
import { Screens } from 'src/app/utils/ScreensUtil';

@Component({
  selector: 'app-scr-notfound',
  templateUrl: './scr-notfound.component.html',
  styleUrl: './scr-notfound.component.css'
})
export class ScrNotfoundComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.NotFound);
    }
  }
}
