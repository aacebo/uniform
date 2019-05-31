import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UniSidenavModule } from '@uniform/components';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [CommonModule, RouterModule, UniSidenavModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidenavModule {}
