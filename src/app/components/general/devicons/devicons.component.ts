import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-devicons',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './devicons.component.html',
  styleUrls: ['./devicons.component.scss'],
})
export class DeviconsComponent {}
