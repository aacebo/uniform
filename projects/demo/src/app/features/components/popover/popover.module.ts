import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTabModule, UniButtonModule, UniPopoverModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { PopoverComponent } from './popover.component';
import { PopoverRoutingModule } from './popover-routing.module';

@NgModule({
  declarations: [PopoverComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    PopoverRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniTabModule,
    UniButtonModule,
    UniPopoverModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class PopoverModule { }
