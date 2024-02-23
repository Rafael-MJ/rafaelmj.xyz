import { NgModule } from '@angular/core';

import { commonModuleUtils } from './utils/routing.utils';

import { NavFooterComponent } from './components/navigators/nav-footer/nav-footer.component';

const definedComponents = [NavFooterComponent];

@NgModule({
  declarations: [definedComponents],
  imports: [commonModuleUtils],
  providers: [],
  bootstrap: [definedComponents],
  exports: [definedComponents],
})
export class AppCommonModule {}
