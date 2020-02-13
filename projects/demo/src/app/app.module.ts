import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  UniButtonModule,
  UniToolbarModule,
  UniIconModule,
  UniIconService,
} from '@uniform/components';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavModule } from './features/sidenav';
import { ToolbarModule } from './features/toolbar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    SidenavModule,
    ToolbarModule,

    UniButtonModule,
    UniToolbarModule,
    UniIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconService: UniIconService) {
    this.iconService.registry('mdi');
  }
}
