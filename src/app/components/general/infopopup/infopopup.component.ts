import { Component, ElementRef, ViewChild } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/routing.utils';

@Component({
  selector: 'app-infopopup',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './infopopup.component.html',
  styleUrl: './infopopup.component.scss',
})
export class InfopopupComponent {
  @ViewChild('InfoIcon') infoIcon!: ElementRef;
  showedInfo: boolean = false;

  updateInfo() {
    if (this.showedInfo) {
      this.showedInfo = false;
      this.infoIcon.nativeElement.setAttribute('src', 'assets/icons/info.png');
      this.infoIcon.nativeElement.innerText = 'i';
    } else {
      this.showedInfo = true;
      this.infoIcon.nativeElement.setAttribute('src', 'assets/icons/info-close.png');
      this.infoIcon.nativeElement.innerText = '»';
    }
  }
}
