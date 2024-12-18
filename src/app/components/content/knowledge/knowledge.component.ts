import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
})
export class KnowledgeComponent {}
