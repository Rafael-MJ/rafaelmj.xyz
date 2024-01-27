import { Component } from '@angular/core';
import { ScreenSupport, Screens } from 'src/app/utils/ScreenUtils';

@Component({
  selector: 'app-scr-curriculum',
  templateUrl: './scr-curriculum.component.html',
  styleUrls: ['./scr-curriculum.component.css']
})
export class ScrCurriculumComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Curriculum);
    }
  }
}
