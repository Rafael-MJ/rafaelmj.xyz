import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport, Screens } from 'src/app/utils/screen.utils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenDeviconsComponent } from '../../general/gen-devicons/gen-devicons.component';
import { ScrKnowledgeComponent } from '../scr-knowledge/scr-knowledge.component';
import { ScrSkillsComponent } from '../scr-skills/scr-skills.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';
import { ScrAboutComponent } from '../scr-about/scr-about.component';
import { ScrInfoComponent } from '../scr-info/scr-info.component';
import { ScrFluencyComponent } from '../scr-fluency/scr-fluency.component';

@Component({
  selector: 'app-scr-main',
  standalone: true,
  imports: [
    commonModuleUtils,
    ScrAboutComponent,
    ScrFluencyComponent,
    ScrInfoComponent,
    ScrKnowledgeComponent,
    ScrSkillsComponent,
    GenArrowsComponent,
    GenDeviconsComponent,
    GenInfoComponent,
  ],
  templateUrl: './scr-main.component.html',
  styleUrl: './scr-main.component.scss',
})
export class ScrMainComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Main);
    }
  }
}
