import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UniSidenavModule, UniIconModule, UniScrollModule, UniHotkeyModule } from '@uniform/components';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,

    UniSidenavModule,
    UniIconModule,
    UniScrollModule,
    UniHotkeyModule,
  ],
})
export class SidenavModule { }
