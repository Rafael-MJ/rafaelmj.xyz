import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavFooterComponent } from './components/navigators/nav-footer/nav-footer.component';
import { GenDeviconsComponent } from './components/general/gen-devicons/gen-devicons.component';
import { RoutingModule, commonModuleUtils } from './utils/RoutingUtils';
import { NavHeaderComponent } from './components/navigators/nav-header/nav-header.component';
import { GenInfoComponent } from './components/general/gen-info/gen-info.component';
import { ScrInfoComponent } from './components/screens/scr-info/scr-info.component';
import { ScrKnowledgeComponent } from './components/screens/scr-knowledge/scr-knowledge.component';
import { ScrAboutComponent } from './components/screens/scr-about/scr-about.component';
import { ScrCurriculumComponent } from './components/screens/scr-curriculum/scr-curriculum.component';
import { ScrSkillsComponent } from './components/screens/scr-skills/scr-skills.component';
import { ScrNotfoundComponent } from './components/screens/scr-notfound/scr-notfound.component';
import { GenArrowsComponent } from './components/general/gen-arrows/gen-arrows.component';

const definedComponents = [
  // General \\
  GenDeviconsComponent,
  GenInfoComponent,
  GenArrowsComponent,

  // Navs \\
  NavHeaderComponent,
  NavFooterComponent,

  // Screens \\
  ScrInfoComponent,
  ScrKnowledgeComponent,
  ScrAboutComponent,
  ScrCurriculumComponent,
  ScrSkillsComponent,
  ScrNotfoundComponent
  ];

@NgModule({
  declarations: [
    definedComponents
  ],
  imports: [
    commonModuleUtils
  ],
  providers: [],
  bootstrap: [definedComponents],
  exports: [definedComponents]
})

export class AppCommonModule { }