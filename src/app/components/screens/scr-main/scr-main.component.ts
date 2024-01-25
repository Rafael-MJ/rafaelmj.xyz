import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

@Component({
  selector: 'app-scr-main',
  templateUrl: './scr-main.component.html',
  styleUrls: ['./scr-main.component.css']
})

export class ScrMainComponent {

  constructor() { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Main);
    }
  }
}
