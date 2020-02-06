import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniIconModule, UniCardModule, UniTabModule } from '@uniform/components';

import { IconRoutingModule } from './icon-routing.module';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    IconRoutingModule,
    UniIconModule,
    UniCardModule,
    UniTabModule,
  ],
})
export class IconModule { }
