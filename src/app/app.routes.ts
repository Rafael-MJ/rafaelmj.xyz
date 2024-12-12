import { Routes } from '@angular/router';

import { NotfoundComponent } from './components/screens/notfound/notfound.component';
import { CurriculumComponent } from './components/screens/curriculum/curriculum.component';
import { MainComponent } from './components/screens/main/main.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },

  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'curriculum',
    component: CurriculumComponent,
  },

  { path: '**', component: NotfoundComponent },
];
