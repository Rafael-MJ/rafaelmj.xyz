import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport } from 'src/app/utils/screen.utils';

import { ArrowsComponent } from '../../general/arrows/arrows.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [commonModuleUtils, ArrowsComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss',
})
export class NotfoundComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(null);
    }
  }
}
