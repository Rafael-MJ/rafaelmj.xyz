import { Component, ElementRef, ViewChild } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport, Screens } from 'src/app/utils/screen.utils';

import { ArrowsComponent } from '../../general/arrows/arrows.component';
import { DeviconsComponent } from '../../general/devicons/devicons.component';
import { InfopopupComponent } from '../../general/infopopup/infopopup.component';
import { AboutComponent } from '../../content/about/about.component';
import { FluencyComponent } from '../../content/fluency/fluency.component';
import { InfoComponent } from '../../content/info/info.component';
import { KnowledgeComponent } from '../../content/knowledge/knowledge.component';
import { SkillsComponent } from '../../content/skills/skills.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    commonModuleUtils,
    AboutComponent,
    FluencyComponent,
    InfoComponent,
    KnowledgeComponent,
    SkillsComponent,
    ArrowsComponent,
    DeviconsComponent,
    InfopopupComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
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
