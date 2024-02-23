import { Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';

import { ScreenSupport, Screens } from '../../../utils/screen.utils';
import { commonModuleUtils } from 'src/app/utils/routing.utils';
import { ScrMainComponent } from '../../screens/scr-main/scr-main.component';

@Component({
  standalone: true,
  imports: [commonModuleUtils, ScrMainComponent],
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  @ViewChildren('n0, n1, n2, n3') elementos!: QueryList<ElementRef>;

  private scrMain: ScrMainComponent;
  htmlElements: ElementRef[] = [];

  constructor(@Inject(ScrMainComponent) screenMain: ScrMainComponent) {
    this.scrMain = screenMain;
  }

  ngAfterViewInit() {
    this.htmlElements = this.elementos.toArray();
  }

  ngAfterViewChecked() {
    let currentScreen = ScreenSupport.getCurrentScreen();

    this.disableEffects();

    switch (currentScreen) {
      case Screens.Main:
        this.htmlElements[0].nativeElement.classList.add('enabled');
        break;
      case Screens.Curriculum:
        this.htmlElements[1].nativeElement.classList.add('enabled');
        break;
    }
  }

  switchMainElement(mainElement: string) {
    const element = this.scrMain;

    switch (mainElement) {
      case 'main':
        element.main.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        element.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'knowledge':
        element.knowledge.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        element.skills.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'fluency':
        element.fluency.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'info':
        element.info.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  disableEffects() {
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
