import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {}
