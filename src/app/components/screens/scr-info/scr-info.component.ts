import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

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
