import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-fluency',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './fluency.component.html',
  styleUrl: './fluency.component.scss',
})
export class FluencyComponent {}
