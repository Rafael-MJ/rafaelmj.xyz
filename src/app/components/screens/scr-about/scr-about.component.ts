import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

@Component({
  selector: 'app-scr-about',
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
