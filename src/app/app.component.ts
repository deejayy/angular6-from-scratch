import { Component } from '@angular/core';
import { ApplicationConfiguration } from '@root/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'app';

  constructor (config: ApplicationConfiguration) {
    this.title = config.setting;
  }
}
