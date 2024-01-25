import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreensUtil';
import { Screens } from 'src/app/utils/ScreensUtil';

@Component({
  selector: 'app-scr-skills',
  templateUrl: './scr-skills.component.html',
  styleUrls: ['./scr-skills.component.css']
})
export class ScrSkillsComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Skills);
    }
  }
}
