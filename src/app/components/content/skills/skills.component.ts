import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
