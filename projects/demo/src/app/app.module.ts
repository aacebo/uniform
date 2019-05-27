import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  UniButtonModule,
  UniToolbarModule,
  UniSidenavModule,
  UniIconModule,
  UniIconService,
  UniTooltipModule,
  UniPopoverModule
} from '@uniform/components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    UniButtonModule,
    UniToolbarModule,
    UniSidenavModule,
    UniIconModule,
    UniTooltipModule,
    UniPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly iconService: UniIconService) {
    this.iconService.registry('mdi');
  }
}
