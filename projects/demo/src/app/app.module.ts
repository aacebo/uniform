import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UniToolbarModule, UniSidenavModule } from '@uniform/components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UniToolbarModule,
    UniSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
