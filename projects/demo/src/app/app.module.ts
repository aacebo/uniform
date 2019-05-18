import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UniToolbarModule } from '@uniform/components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UniToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
