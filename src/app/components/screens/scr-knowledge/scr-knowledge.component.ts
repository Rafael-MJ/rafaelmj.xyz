import { Component } from '@angular/core';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

@Component({
  selector: 'app-scr-knowledge',
  templateUrl: './scr-knowledge.component.html',
  styleUrls: ['./scr-knowledge.component.css']
})
export class ScrKnowledgeComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Knowledge);
    }
  }
}
