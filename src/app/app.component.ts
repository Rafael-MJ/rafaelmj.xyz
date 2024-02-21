import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { AppCommonModule } from './app.common.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AppCommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rafael-mj';
  footerUrl = 'https://www.rafaelmj.xyz';
  footerLink = 'www.rafaelmj.xyz';
}
