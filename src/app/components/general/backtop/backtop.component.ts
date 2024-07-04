import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-backtop',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './backtop.component.html',
  styleUrl: './backtop.component.scss'
})
export class BacktopComponent {

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
