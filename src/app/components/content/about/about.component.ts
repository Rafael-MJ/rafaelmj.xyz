import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { ArrowsComponent } from '../../general/arrows/arrows.component';
import { InfopopupComponent } from '../../general/infopopup/infopopup.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [commonModuleUtils, ArrowsComponent, InfopopupComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
