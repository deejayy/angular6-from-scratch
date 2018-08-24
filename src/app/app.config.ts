import { Injectable } from '@angular/core';

class ApplicationConfigurationTemplate {
  protected pSetting: string;
  protected pTokenStoreKey: string;

  get setting(): string {
    return this.pSetting;
  }
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class ApplicationConfiguration extends ApplicationConfigurationTemplate {
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class ApplicationConfigurationDev extends ApplicationConfigurationTemplate {
  // tslint:disable-next-line:no-http-string
  protected pSetting: string = 'value-dev';
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class ApplicationConfigurationProd extends ApplicationConfigurationTemplate {
  // tslint:disable-next-line:no-http-string
  protected pSetting: string = 'value-prod';
}
