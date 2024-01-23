import { Routes } from '@angular/router';
import { PageMainComponent } from './components/screens/page-main/page-main.component';
import { PageSkillsComponent } from './components/screens/page-skills/page-skills.component';
import { PageKnowledgeComponent } from './components/screens/page-knowledge/page-knowledge.component';
import { PageInfoComponent } from './components/screens/page-info/page-info.component';

export const routes: Routes = [{
    path: '', component: PageMainComponent
    },

    {
    path: 'main',  component: PageMainComponent
    },
    {
    path: 'skills', component: PageSkillsComponent
    },
    {
    path: 'knowledge', component: PageKnowledgeComponent
    },
    {
    path: 'infos', component: PageInfoComponent
    } /* ,
    {
        path: 'msg', component: PageMsgComponent)
    } ,

    { path: '**', component: NotFoundComponent } */
  ];