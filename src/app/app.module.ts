import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { PageSkillsComponent } from './page-skills/page-skills.component';
import { PageKnowledgeComponent } from './page-knowledge/page-knowledge.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { NavDeviconsComponent } from './nav-devicons/nav-devicons.component';
import { PageMsgComponent } from './page-msg/page-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavHeaderComponent,
    NavFooterComponent,
    PageSkillsComponent,
    PageKnowledgeComponent,
    PageInfoComponent,
    NavDeviconsComponent,
    PageMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
