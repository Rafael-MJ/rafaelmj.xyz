import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';

@Component({
  selector: 'app-scr-about',
  standalone: true,
  imports: [commonModuleUtils, GenArrowsComponent, GenInfoComponent],
  templateUrl: './scr-about.component.html',
  styleUrls: ['./scr-about.component.scss'],
})
export class ScrAboutComponent {}
