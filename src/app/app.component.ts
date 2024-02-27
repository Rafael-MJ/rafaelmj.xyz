import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavHeaderComponent } from './components/navigators/nav-header/nav-header.component';
import { NavFooterComponent } from './components/navigators/nav-footer/nav-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavHeaderComponent, NavFooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
