import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  UniToolbarModule,
  UniSidenavModule,
  UniIconModule,
} from '@uniform/components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UniToolbarModule,
    UniSidenavModule,
    UniIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
