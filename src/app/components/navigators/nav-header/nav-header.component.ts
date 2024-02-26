import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

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
  @ViewChildren('hMain, hAbout, hKnowledge, hSkills, hFluency, hInfo, hCV')
  elementos!: QueryList<ElementRef>;

  currentScreen: Screens | null = null;
  showMainElements = true;
  htmlElements: ElementRef[] = [];

  ngAfterViewInit() {
    this.htmlElements = this.elementos.toArray();
  }

  ngAfterViewChecked() {
    this.currentScreen = ScreenSupport.getCurrentScreen();

    this.disableEffects();

    switch (this.currentScreen) {
      case Screens.Main:
        this.htmlElements[0].nativeElement.classList.add('enabled');
        break;
      default:
        this.htmlElements[this.htmlElements.length - 1].nativeElement.classList.add('enabled');
        break;
    }
  }

  ngAfterContentChecked() {
    this.currentScreen = ScreenSupport.getCurrentScreen();

    switch (this.currentScreen) {
      case Screens.Main:
        this.showMainElements = true;
        break;
      default:
        this.showMainElements = false;
        break;
    }
  }

  switchMainElement(mainElement: string) {
    const element = ScreenSupport.getCurrentComponent();

    const elementTransition = {
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    };

    if (element instanceof ScrMainComponent) {
      switch (mainElement) {
        case 'main':
          element.main.nativeElement.scrollIntoView(elementTransition);
          break;
        case 'about':
          element.about.nativeElement.scrollIntoView(elementTransition);
          break;
        case 'knowledge':
          element.knowledge.nativeElement.scrollIntoView(elementTransition);
          break;
        case 'skills':
          element.skills.nativeElement.scrollIntoView(elementTransition);
          break;
        case 'fluency':
          element.fluency.nativeElement.scrollIntoView(elementTransition);
          break;
        case 'info':
          element.info.nativeElement.scrollIntoView(elementTransition);
          break;
      }
    }
  }

  disableEffects() {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].nativeElement.classList.remove('enabled');
    }
  }
}
