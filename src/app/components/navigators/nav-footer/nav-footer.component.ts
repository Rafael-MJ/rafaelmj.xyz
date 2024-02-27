import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-nav-footer',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss'],
})
export class NavFooterComponent {}
