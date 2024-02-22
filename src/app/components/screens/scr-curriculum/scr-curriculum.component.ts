import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport, Screens } from 'src/app/utils/screen.utils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';

@Component({
  selector: 'app-scr-curriculum',
  standalone: true,
  imports: [commonModuleUtils, GenArrowsComponent, GenInfoComponent],
  templateUrl: './scr-curriculum.component.html',
  styleUrls: ['./scr-curriculum.component.scss'],
})
export class ScrCurriculumComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Curriculum);
    }
  }
}
