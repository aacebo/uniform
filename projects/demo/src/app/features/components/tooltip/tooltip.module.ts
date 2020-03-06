import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTooltipModule, UniButtonModule, UniTabModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { TooltipComponent } from './tooltip.component';
import { TooltipRoutingModule } from './tooltip-routing.module';

@NgModule({
  declarations: [TooltipComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    TooltipRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniTooltipModule,
    UniButtonModule,
    UniTabModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class TooltipModule { }
