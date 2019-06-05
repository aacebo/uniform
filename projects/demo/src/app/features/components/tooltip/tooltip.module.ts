import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniTooltipModule, UniButtonModule, UniCardModule, UniTabModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { TooltipComponent } from './tooltip.component';
import { TooltipRoutingModule } from './tooltip-routing.module';

@NgModule({
  declarations: [TooltipComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    UniTooltipModule,
    UniButtonModule,
    UniCardModule,
    UniTabModule,
    UniFormFieldModule,
    UniSelectModule
  ]
})
export class TooltipModule { }
