import { Routes } from '@angular/router';
import { ScrMainComponent } from './components/screens/scr-main/scr-main.component';
import { ScrSkillsComponent } from './components/screens/scr-skills/scr-skills.component';
import { ScrKnowledgeComponent } from './components/screens/scr-knowledge/scr-knowledge.component';
import { ScrInfoComponent } from './components/screens/scr-info/scr-info.component';

export const routes: Routes = [{
    path: '', component: ScrMainComponent
    },

    {
    path: 'main',  component: ScrMainComponent
    },
    {
    path: 'skills', component: ScrSkillsComponent
    },
    {
    path: 'knowledge', component: ScrKnowledgeComponent
    },
    {
    path: 'infos', component: ScrInfoComponent
    } /* ,
    {
        path: 'msg', component: PageMsgComponent)
    } ,

    { path: '**', component: NotFoundComponent } */
  ];