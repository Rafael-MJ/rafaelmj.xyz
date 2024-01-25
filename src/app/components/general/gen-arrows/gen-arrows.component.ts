import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenSupport } from 'src/app/utils/ScreensUtil';
import { Screens } from 'src/app/utils/ScreensUtil';

let getCurrComponent: Screens;
let lockLeftArrow = false;
let lockRightArrow = false;

export const setArrowState = (index: number, enabled: boolean) => {
  switch (index) {
    case 0: lockLeftArrow = enabled; break;
    case 1: lockRightArrow = enabled; break;
  }
}

export const updateEnabledArrows = () => {

  getCurrComponent = ScreenSupport.getCurrentScreen()

  switch (getCurrComponent) {
      case Screens.Main:
      setArrowState(0, true);
      break;
      case Screens.Info:
      setArrowState(1, true);
      break;
      case Screens.NotFound:
      setArrowState(0, true);
      setArrowState(1, true);
      break;
      default:
      setArrowState(0, false);
      setArrowState(1, false);
      break;
  }
}

@Component({
  selector: 'app-gen-arrows',
  templateUrl: './gen-arrows.component.html',
  styleUrl: './gen-arrows.component.css'
})

export class GenArrowsComponent {

  @ViewChild('LeftArrow') leftArrow!: ElementRef;
  @ViewChild('RightArrow') rightArrow!: ElementRef;

  constructor(private router: Router) { }

  ngAfterContentChecked() {
    if (this.leftArrow && this.rightArrow) {
      if(lockLeftArrow && lockRightArrow) {
        this.leftArrow.nativeElement.disabled = true;
        this.rightArrow.nativeElement.disabled = true;
      } else if (lockLeftArrow) {
        this.leftArrow.nativeElement.disabled = true;
      } else if (lockRightArrow) {
        this.rightArrow.nativeElement.disabled = true;
      } else {
        this.leftArrow.nativeElement.disabled = false;
        this.rightArrow.nativeElement.disabled = false;
      }
    }
  }

  newRoute(route: string) {
    this.router.navigate(['/'+route]);
  }

  onClickArrow(index: number) {
    if (index == 0) {
      switch (getCurrComponent) {
        case Screens.Knowledge: this.newRoute('main'); break;
        case Screens.Skills: this.newRoute('knowledge'); break;
        case Screens.Info: this.newRoute('skills'); break;
      }
    } else if(index == 1) {
      switch (getCurrComponent) {
        case Screens.Main: this.newRoute('knowledge'); break;
        case Screens.Knowledge: this.newRoute('skills'); break;
        case Screens.Skills: this.newRoute('infos'); break;
      }
    }
  }
}
