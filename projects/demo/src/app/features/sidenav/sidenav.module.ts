import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UniSidenavModule, UniIconModule, UniScrollModule } from '@uniform/components';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [CommonModule, RouterModule, UniSidenavModule, UniIconModule, UniScrollModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidenavModule {}
