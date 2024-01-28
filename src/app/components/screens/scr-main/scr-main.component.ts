import { Component } from '@angular/core';
import { GenArrowsComponent } from '../../general/gen-arrows/gen-arrows.component';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';
import { ScreenSupport, Screens } from 'src/app/utils/ScreenUtils';

@Component({
  selector: 'app-scr-main',
  standalone: true,
  imports: [
    commonModuleUtils,
    GenArrowsComponent
  ],
  templateUrl: './scr-main.component.html',
  styleUrl: './scr-main.component.css'
})
export class ScrMainComponent {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      ScreenSupport.setCurrentScreen(Screens.Main);
    }
  }
}
