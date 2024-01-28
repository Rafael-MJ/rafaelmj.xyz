import { Component } from '@angular/core';
import { commonModuleUtils } from 'src/app/utils/RoutingUtils';

@Component({
  selector: 'app-gen-devicons',
  standalone: true,
  imports: [
    commonModuleUtils
  ],
  templateUrl: './gen-devicons.component.html',
  styleUrls: ['./gen-devicons.component.css']
})
export class GenDeviconsComponent {

}
