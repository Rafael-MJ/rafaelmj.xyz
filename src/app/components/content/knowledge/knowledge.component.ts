import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

import { ArrowsComponent } from '../../general/arrows/arrows.component';
import { InfopopupComponent } from '../../general/infopopup/infopopup.component';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [commonModuleUtils, ArrowsComponent, InfopopupComponent],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
})
export class KnowledgeComponent {}
