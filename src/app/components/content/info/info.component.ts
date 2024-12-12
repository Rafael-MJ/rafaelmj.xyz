import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { InfopopupComponent } from '../../general/infopopup/infopopup.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [commonModuleUtils, InfopopupComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {}
