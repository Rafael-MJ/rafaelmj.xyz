import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

import { ScreenSupport, ScreensSide } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

let getCurrComponent: Screens | null;
let lockLeftArrow = false;
let lockRightArrow = false;

export const setArrowState = (side: ScreensSide, disabled: boolean) => {
  switch (side) {
    case ScreensSide.Left: lockLeftArrow = disabled; break;
    case ScreensSide.Right: lockRightArrow = disabled; break;
  }
}

export const updateEnabledArrows = () => {
  getCurrComponent = ScreenSupport.getCurrentScreen();

  const getScreenLeft = ScreenSupport.getScreen(getCurrComponent, ScreensSide.Left);
  const getScreenRight = ScreenSupport.getScreen(getCurrComponent, ScreensSide.Right);

  if (getCurrComponent == null) {
    setArrowState(ScreensSide.Left, true);
    setArrowState(ScreensSide.Right, true);

  } else if (getScreenLeft == null) {
    setArrowState(ScreensSide.Left, true);
    setArrowState(ScreensSide.Right, false);

  } else if (getScreenRight == null) {
    setArrowState(ScreensSide.Left, false);
    setArrowState(ScreensSide.Right, true);

  } else {
    setArrowState(ScreensSide.Left, false);
    setArrowState(ScreensSide.Right, false);
  }
}

@Component({
  selector: 'app-gen-arrows',
  standalone: true,
  imports: [
    commonModuleUtils
  ],
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

    if (side == 0 && previousScreen !== null) {
      this.newRoute(previousScreen);

    } else if (side == 1 && nextScreen !== null) {
      this.newRoute(nextScreen);
    }
  }
}
