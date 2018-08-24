import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { CoreModule } from '@root/core/core.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterTestingModule,
    StoreModule.forRoot({
    }),
  ],
  providers: [
  ],
  bootstrap: [
  ],
  schemas: [
  ],
  exports: [
  ],
})
export class TestModule {
}
