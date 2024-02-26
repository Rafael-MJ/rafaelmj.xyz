import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-con-fluency',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './con-fluency.component.html',
  styleUrl: './con-fluency.component.scss',
})
export class ConFluencyComponent {}
