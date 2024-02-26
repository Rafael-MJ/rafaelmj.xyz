import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport, Screens } from 'src/app/utils/screen.utils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenDeviconsComponent } from '../../general/gen-devicons/gen-devicons.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';
import { ConAboutComponent } from '../../content/con-about/con-about.component';
import { ConFluencyComponent } from '../../content/con-fluency/con-fluency.component';
import { ConInfoComponent } from '../../content/con-info/con-info.component';
import { ConKnowledgeComponent } from '../../content/con-knowledge/con-knowledge.component';
import { ConSkillsComponent } from '../../content/con-skills/con-skills.component';

@Component({
  selector: 'app-scr-main',
  standalone: true,
  imports: [
    commonModuleUtils,
    ConAboutComponent,
    ConFluencyComponent,
    ConInfoComponent,
    ConKnowledgeComponent,
    ConSkillsComponent,
    GenArrowsComponent,
    GenDeviconsComponent,
    GenInfoComponent,
  ],
  templateUrl: './scr-main.component.html',
  styleUrl: './scr-main.component.scss',
})
export class ScrMainComponent {
  @ViewChild('main', { static: true }) main!: ElementRef;
  @ViewChild('about', { static: true }) about!: ElementRef;
  @ViewChild('knowledge', { static: true }) knowledge!: ElementRef;
  @ViewChild('skills', { static: true }) skills!: ElementRef;
  @ViewChild('fluency', { static: true }) fluency!: ElementRef;
  @ViewChild('info', { static: true }) info!: ElementRef;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Main);
    }
  }

  ngAfterViewChecked() {
    ScreenSupport.setCurrentComponent(this);
  }
}
