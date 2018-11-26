import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PackageTestNg7Module } from 'package-test-ng7';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PackageTestNg7Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
