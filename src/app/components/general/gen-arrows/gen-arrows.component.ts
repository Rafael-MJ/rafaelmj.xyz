import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

import { ScreenSupport, ScreensSide } from 'src/app/utils/ScreenUtils';
import { Screens } from 'src/app/utils/ScreenUtils';

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

  getCurrComponent: Screens | null = null;
  lockLeftArrow = false;
  lockRightArrow = false;

  initData() {
      this.getCurrComponent = ScreenSupport.getCurrentScreen();

      const getScreenLeft = ScreenSupport.getScreen(this.getCurrComponent, ScreensSide.Left);
      const getScreenRight = ScreenSupport.getScreen(this.getCurrComponent, ScreensSide.Right);

      if (this.getCurrComponent == null) {
        this.setArrowState(ScreensSide.Left, true);
        this.setArrowState(ScreensSide.Right, true);

      } else if (getScreenLeft == null) {
        this.setArrowState(ScreensSide.Left, true);
        this.setArrowState(ScreensSide.Right, false);

      } else if (getScreenRight == null) {
        this.setArrowState(ScreensSide.Left, false);
        this.setArrowState(ScreensSide.Right, true);

      } else {
        this.setArrowState(ScreensSide.Left, false);
        this.setArrowState(ScreensSide.Right, false);
      }
  }

  setArrowState = (side: ScreensSide, disabled: boolean) => {
    switch (side) {
      case ScreensSide.Left: this.lockLeftArrow = disabled; break;
      case ScreensSide.Right: this.lockRightArrow = disabled; break;
    }
  }

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

  checkDisabledArrows() {
    if (this.leftArrow && this.rightArrow) {
      if(this.lockLeftArrow && this.lockRightArrow) {
        this.disableArrow(true, ScreensSide.Left);
        this.disableArrow(true, ScreensSide.Right);

      } else if (this.lockLeftArrow && !this.lockRightArrow) {
        this.disableArrow(true, ScreensSide.Left);
        this.disableArrow(false, ScreensSide.Right);

      } else if (this.lockRightArrow && !this.lockLeftArrow) {
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
    const previousScreen = ScreenSupport.getScreen(this.getCurrComponent, ScreensSide.Left);
    const nextScreen = ScreenSupport.getScreen(this.getCurrComponent, ScreensSide.Right);

    if (side == 0 && previousScreen !== null) {
      this.newRoute(previousScreen);

    } else if (side == 1 && nextScreen !== null) {
      this.newRoute(nextScreen);
    }
  }

  ngAfterViewChecked() {
    this.initData();
    this.checkDisabledArrows()
  }
}
