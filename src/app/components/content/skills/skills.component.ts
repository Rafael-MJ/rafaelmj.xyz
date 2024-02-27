import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { ArrowsComponent } from '../../general/arrows/arrows.component';
import { InfopopupComponent } from '../../general/infopopup/infopopup.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [commonModuleUtils, ArrowsComponent, InfopopupComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {}
