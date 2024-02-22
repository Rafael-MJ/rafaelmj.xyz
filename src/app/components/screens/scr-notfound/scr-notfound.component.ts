import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport } from 'src/app/utils/screen.utils';

import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';

@Component({
  selector: 'app-scr-notfound',
  standalone: true,
  imports: [commonModuleUtils, GenArrowsComponent],
  templateUrl: './scr-notfound.component.html',
  styleUrl: './scr-notfound.component.scss',
})
export class ScrNotfoundComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(null);
    }
  }
}
