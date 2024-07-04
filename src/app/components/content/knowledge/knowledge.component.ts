import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { InfopopupComponent } from '../../general/infopopup/infopopup.component';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [commonModuleUtils, InfopopupComponent],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
})
export class KnowledgeComponent {}
