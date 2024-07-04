import { Component } from '@angular/core';

@Component({
  selector: 'app-backtop',
  standalone: true,
  imports: [],
  templateUrl: './backtop.component.html',
  styleUrl: './backtop.component.scss'
})
export class BacktopComponent {

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
