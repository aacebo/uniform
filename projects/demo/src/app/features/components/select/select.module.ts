import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UniSelectModule, UniFormFieldModule, UniTabModule, UniCardModule } from '@uniform/components';

import { SelectComponent } from './select.component';
import { SelectRoutingModule } from './select-routing.module';

@NgModule({
  declarations: [SelectComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UniSelectModule,
    UniFormFieldModule,
    UniTabModule,
    UniCardModule,
    SelectRoutingModule,
  ],
})
export class SelectModule { }
