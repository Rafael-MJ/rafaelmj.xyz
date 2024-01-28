import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';
import { ScreenSupport, Screens } from 'src/app/utils/ScreenUtils';
import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';

@Component({
  selector: 'app-scr-curriculum',
  standalone: true,
  imports: [
    commonModuleUtils,
    GenArrowsComponent,
    GenInfoComponent
  ],
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
