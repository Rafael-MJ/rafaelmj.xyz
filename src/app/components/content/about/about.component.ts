import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { InfopopupComponent } from '../../general/infopopup/infopopup.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [commonModuleUtils, InfopopupComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
