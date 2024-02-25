import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { AppCommonModule } from './app.common.module';
import { NavHeaderComponent } from './components/navigators/nav-header/nav-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AppCommonModule, NavHeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rafael-mj';
  footerUrl = 'https://www.rafaelmj.xyz';
  footerLink = 'www.rafaelmj.xyz';
}
