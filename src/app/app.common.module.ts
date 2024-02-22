import { NgModule } from '@angular/core';

import { commonModuleUtils } from './utils/routing.utils';

import { NavFooterComponent } from './components/navigators/nav-footer/nav-footer.component';
import { NavHeaderComponent } from './components/navigators/nav-header/nav-header.component';

const definedComponents = [NavHeaderComponent, NavFooterComponent];

@NgModule({
  declarations: [definedComponents],
  imports: [commonModuleUtils],
  providers: [],
  bootstrap: [definedComponents],
  exports: [definedComponents],
})
export class AppCommonModule {}
