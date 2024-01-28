import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

import { ScreenSupport, Screens } from '../../../utils/ScreenUtils'
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  @ViewChildren('n0, n1, n2, n3') elementos!: QueryList<ElementRef>;
  htmlElements: ElementRef[] = [];

  ngAfterViewInit() {
    this.htmlElements = this.elementos.toArray();
  }

  ngAfterViewChecked() {
    let currentScreen = ScreenSupport.getCurrentScreen();

    this.disableEffects();

    switch(currentScreen) {
      case Screens.About:
        this.htmlElements[0].nativeElement.classList.add('enabled');
        break;
      case Screens.Knowledge:
        this.htmlElements[1].nativeElement.classList.add('enabled');
        break;
      case Screens.Skills:
        this.htmlElements[2].nativeElement.classList.add('enabled');
        break;
      case Screens.Info:
        this.htmlElements[3].nativeElement.classList.add('enabled');
        break;
    }
  }

  disableEffects () {
      for (let i = 0; i < this.htmlElements.length; i++) {
        this.htmlElements[i].nativeElement.classList.remove('enabled');
      }
  }

  enableEffect(index: number) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      const element = this.htmlElements[i].nativeElement;

      if (i === index) {
        element.classList.add('enabled');
      } else {
        element.classList.remove('enabled');
      }
    }
  }
}