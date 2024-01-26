import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenSupport, ScreensSide } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

let getCurrComponent: Screens;
let lockLeftArrow = false;
let lockRightArrow = false;

export const setArrowState = (side: ScreensSide, disabled: boolean) => {
  switch (side) {
    case ScreensSide.Left: lockLeftArrow = disabled; break;
    case ScreensSide.Right: lockRightArrow = disabled; break;
  }
}

export const updateEnabledArrows = () => {
  getCurrComponent = ScreenSupport.getCurrentScreen()

  switch (getCurrComponent) {
      case Screens.Main:
        setArrowState(ScreensSide.Left, true);
        setArrowState(ScreensSide.Right, false);
      break;
      case Screens.Info:
        setArrowState(ScreensSide.Left, false);
        setArrowState(ScreensSide.Right, true);
      break;
      case Screens.NotFound:
        setArrowState(ScreensSide.Left, true);
        setArrowState(ScreensSide.Right, true);
      break;
      default:
        setArrowState(ScreensSide.Left, false);
        setArrowState(ScreensSide.Right, false);
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

  disableArrow(disabled: boolean, side: ScreensSide) {
    switch(side) {
      case ScreensSide.Left:
        this.leftArrow.nativeElement.disabled = disabled;
        break;
      case ScreensSide.Right:
        this.rightArrow.nativeElement.disabled = disabled;
        break;
    }
  }

  ngAfterContentChecked() {
    if (this.leftArrow && this.rightArrow) {
      if(lockLeftArrow && lockRightArrow) {
        this.disableArrow(true, ScreensSide.Left);
        this.disableArrow(true, ScreensSide.Right);

      } else if (lockLeftArrow && !lockRightArrow) {
        this.disableArrow(true, ScreensSide.Left);
        this.disableArrow(false, ScreensSide.Right);

      } else if (lockRightArrow && !lockLeftArrow) {
        this.disableArrow(false, ScreensSide.Left);
        this.disableArrow(true, ScreensSide.Right);

      } else {
        this.disableArrow(false, ScreensSide.Left);
        this.disableArrow(false, ScreensSide.Right);
      }
    }
  }

  newRoute(route: string) {
    this.router.navigate(['/'+route]);
  }

  onClickArrow(side: ScreensSide) {
    const previousScreen = ScreenSupport.getScreen(getCurrComponent, ScreensSide.Left);
    const nextScreen = ScreenSupport.getScreen(getCurrComponent, ScreensSide.Right);

    switch (side) {
      case ScreensSide.Left:
        this.newRoute(previousScreen); break;
      case ScreensSide.Right:
        this.newRoute(nextScreen); break;
      default:
    }
  }
}
