import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScreenSupport } from 'src/app/utils/screen.utils';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss',
})
export class NotfoundComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(null);
      window.scrollTo(0, 0);
    }
  }
}
