import { Routes } from '@angular/router';

import { ScrNotfoundComponent } from './components/screens/scr-notfound/scr-notfound.component';
import { ScrCurriculumComponent } from './components/screens/scr-curriculum/scr-curriculum.component';
import { ScrMainComponent } from './components/screens/scr-main/scr-main.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },

  {
    path: 'main',
    component: ScrMainComponent,
  },
  {
    path: 'curriculum',
    component: ScrCurriculumComponent,
  },

  { path: '**', component: ScrNotfoundComponent },
];
