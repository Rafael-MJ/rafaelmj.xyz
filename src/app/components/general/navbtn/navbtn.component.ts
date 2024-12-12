import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-navbtn',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './navbtn.component.html',
  styleUrl: './navbtn.component.scss',
})
export class NavbtnComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
