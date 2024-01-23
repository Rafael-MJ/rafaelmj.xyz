import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavFooterComponent } from './components/navigators/nav-footer/nav-footer.component';
import { NavDeviconsComponent } from './components/navigators/nav-devicons/nav-devicons.component';
import { RoutingModule } from './utils/routing.module';
import { NavHeaderComponent } from './components/navigators/nav-header/nav-header.component';
import { InfoFooterComponent } from './components/general/info-footer/info-footer.component';
import { PageInfoComponent } from './components/screens/page-info/page-info.component';
import { PageKnowledgeComponent } from './components/screens/page-knowledge/page-knowledge.component';
import { PageMainComponent } from './components/screens/page-main/page-main.component';
import { PageMsgComponent } from './components/screens/page-msg/page-msg.component';
import { PageSkillsComponent } from './components/screens/page-skills/page-skills.component';

const definedComponents = [
  // General \\
  InfoFooterComponent,
  
  // Navs \\
  NavHeaderComponent,
  NavDeviconsComponent,
  NavFooterComponent,
  
  // Screens \\
  PageInfoComponent,
  PageKnowledgeComponent,
  PageMainComponent,
  PageMsgComponent,
  PageSkillsComponent
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