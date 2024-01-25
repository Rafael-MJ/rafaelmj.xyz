import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

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
