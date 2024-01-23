import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavFooterComponent } from './components/navigators/nav-footer/nav-footer.component';
import { GenDeviconsComponent } from './components/general/gen-devicons/gen-devicons.component';
import { RoutingModule } from './utils/routing.module';
import { NavHeaderComponent } from './components/navigators/nav-header/nav-header.component';
import { GenInfoComponent } from './components/general/gen-info/gen-info.component';
import { ScrInfoComponent } from './components/screens/scr-info/scr-info.component';
import { ScrKnowledgeComponent } from './components/screens/scr-knowledge/scr-knowledge.component';
import { ScrMainComponent } from './components/screens/scr-main/scr-main.component';
import { ScrMsgComponent } from './components/screens/scr-msg/scr-msg.component';
import { ScrSkillsComponent } from './components/screens/scr-skills/scr-skills.component';

const definedComponents = [
  // General \\
  GenInfoComponent,
  
  // Navs \\
  NavHeaderComponent,
  GenDeviconsComponent,
  NavFooterComponent,
  
  // Screens \\
  ScrInfoComponent,
  ScrKnowledgeComponent,
  ScrMainComponent,
  ScrMsgComponent,
  ScrSkillsComponent
  ];

@NgModule({
  declarations: [
    definedComponents
  ],
  imports: [
    CommonModule,
    RoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [definedComponents],
  exports: [definedComponents]
})

export class AppCommonModule { }