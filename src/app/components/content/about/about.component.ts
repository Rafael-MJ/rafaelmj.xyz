import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
