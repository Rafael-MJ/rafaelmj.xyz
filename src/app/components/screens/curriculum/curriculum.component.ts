import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport, Screens } from 'src/app/utils/screen.utils';

import { InfopopupComponent } from '../../general/infopopup/infopopup.component';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [commonModuleUtils, InfopopupComponent],
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Curriculum);
      window.scrollTo(0, 0);
    }
  }

  ngAfterViewChecked() {
    ScreenSupport.setCurrentComponent(this);
  }
}
