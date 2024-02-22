import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-gen-devicons',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './gen-devicons.component.html',
  styleUrls: ['./gen-devicons.component.scss'],
})
export class GenDeviconsComponent {}
