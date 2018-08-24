import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { environment } from '@env/environment';

import {
  ApplicationConfiguration,
  ApplicationConfigurationProd,
  ApplicationConfigurationDev,
} from '@root/app.config';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
  providers: [
    ApplicationConfiguration,
    {
      provide: ApplicationConfiguration,
      useFactory: (): any => {
        if (environment.production) {
          return new ApplicationConfigurationProd();
        } else {
          return new ApplicationConfigurationDev();
        }
      },
      deps: [
      ],
    },
  ],
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
