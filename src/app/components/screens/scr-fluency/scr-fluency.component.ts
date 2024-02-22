import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-scr-fluency',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './scr-fluency.component.html',
  styleUrl: './scr-fluency.component.scss',
})
export class ScrFluencyComponent {}
