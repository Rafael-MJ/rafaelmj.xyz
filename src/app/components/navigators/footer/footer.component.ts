import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
