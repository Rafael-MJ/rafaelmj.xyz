import { InfoFooterModule } from './components/general/info-footer/info-footer.module';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderModule } from './components/navigators/nav-header/nav-header.module';
import { NavDevIconsModule } from './components/navigators/nav-devicons/nav-devicons.module';
import { FooterModule } from './components/navigators/nav-footer/nav-footer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    HeaderModule,
    FooterModule,
    NavDevIconsModule,
    InfoFooterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rafael-mj';
  footerUrl = 'https://www.rafaelmj.xyz';
  footerLink = 'www.rafaelmj.xyz';
}
