import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenSupport } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

let getCurrComponent: Screens;
let lockLeftArrow = false;
let lockRightArrow = false;

export const setArrowState = (index: number, disabled: boolean) => {
  switch (index) {
    case 0: lockLeftArrow = disabled; break;
    case 1: lockRightArrow = disabled; break;
  }
}

export const updateEnabledArrows = () => {
  getCurrComponent = ScreenSupport.getCurrentScreen()

  switch (getCurrComponent) {
      case Screens.Main:
        setArrowState(0, true);
        setArrowState(1, false);
      break;
      case Screens.Info:
        setArrowState(0, false);
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
      const leftArrowElement = this.leftArrow.nativeElement;
      const rightArrowElement = this.rightArrow.nativeElement;

      if(lockLeftArrow && lockRightArrow) {
        leftArrowElement.disabled = true;
        rightArrowElement.disabled = true;

      } else if (lockLeftArrow && !lockRightArrow) {
        leftArrowElement.disabled = true;
        rightArrowElement.disabled = false;

      } else if (lockRightArrow && !lockLeftArrow) {
        rightArrowElement.disabled = true;
        leftArrowElement.disabled = false;

      } else {
        leftArrowElement.disabled = false;
        rightArrowElement.disabled = false;
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
