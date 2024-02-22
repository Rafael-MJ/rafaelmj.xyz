import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';

@Component({
  selector: 'app-scr-skills',
  standalone: true,
  imports: [commonModuleUtils, GenArrowsComponent, GenInfoComponent],
  templateUrl: './scr-skills.component.html',
  styleUrls: ['./scr-skills.component.scss'],
})
export class ScrSkillsComponent {}
