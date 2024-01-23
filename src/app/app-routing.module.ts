import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageInfoComponent } from './page-info/page-info.component';
import { PageKnowledgeComponent } from './page-knowledge/page-knowledge.component';
import { PageSkillsComponent } from './page-skills/page-skills.component';
// import { PageMsgComponent } from './page-msg/page-msg.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'infos', component: PageInfoComponent },
  { path: 'knowledge', component: PageKnowledgeComponent },
  { path: 'skills', component: PageSkillsComponent },
  // { path: 'msg', component: PageMsgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
