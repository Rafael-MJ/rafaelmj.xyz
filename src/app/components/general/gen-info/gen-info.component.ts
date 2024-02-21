import { Component, ElementRef, ViewChild } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

@Component({
  selector: 'app-gen-info',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './gen-info.component.html',
  styleUrl: './gen-info.component.scss',
})
export class GenInfoComponent {
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
