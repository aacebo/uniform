import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniFormFieldModule, UniTabModule, UniInputModule, UniButtonModule, UniIconModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    InputRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniFormFieldModule,
    UniInputModule,
    UniTabModule,
    UniButtonModule,
    UniIconModule,
  ],
})
export class InputModule { }
