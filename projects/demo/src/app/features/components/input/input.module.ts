import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UniFormFieldModule, UniTabModule, UniCardModule, UniInputModule } from '@uniform/components';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UniFormFieldModule,
    UniInputModule,
    UniTabModule,
    UniCardModule,
    InputRoutingModule,
  ],
})
export class InputModule { }
