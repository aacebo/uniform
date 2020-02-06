import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniTabModule, UniCardModule, UniButtonModule, UniPopoverModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { PopoverComponent } from './popover.component';
import { PopoverRoutingModule } from './popover-routing.module';

@NgModule({
  declarations: [PopoverComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverRoutingModule,
    UniTabModule,
    UniCardModule,
    UniButtonModule,
    UniPopoverModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class PopoverModule { }
