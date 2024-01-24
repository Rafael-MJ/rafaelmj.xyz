import { Component, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { AppCommonModule } from './app.common.module';
import { setArrowState } from './components/general/gen-arrows/gen-arrows.component';

export let currentComponent = '';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    AppCommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rafael-mj';
  footerUrl = 'https://www.rafaelmj.xyz';
  footerLink = 'www.rafaelmj.xyz';

  componentAdded($event: EventEmitter<any>){
    currentComponent = $event.constructor.name;

    switch (currentComponent) {
      case '_ScrMainComponent':
        setArrowState(0, true);
        break;
      case '_ScrInfoComponent':
        setArrowState(1, true);
        break;
      case '_ScrNotfoundComponent':
        setArrowState(0, true);
        setArrowState(1, true);
        break;
      default:
        setArrowState(0, false);
        setArrowState(1, false);
        break;
    }
  }
}
