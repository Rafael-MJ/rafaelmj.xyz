import { Component } from '@angular/core';

import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

@Component({
  selector: 'app-gen-info',
  standalone: true,
  imports: [commonModuleUtils],
  templateUrl: './gen-info.component.html',
  styleUrl: './gen-info.component.css',
})
export class GenInfoComponent {
  showedInfo: boolean = false;

  updateInfo() {
    if (this.showedInfo) this.showedInfo = false;
    else this.showedInfo = true;
  }
}
