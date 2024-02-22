import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { GenInfoComponent } from '../../general/gen-info/gen-info.component';

@Component({
  selector: 'app-scr-info',
  standalone: true,
  imports: [commonModuleUtils, GenArrowsComponent, GenInfoComponent],
  templateUrl: './scr-info.component.html',
  styleUrls: ['./scr-info.component.scss'],
})
export class ScrInfoComponent {}
