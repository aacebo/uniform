import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniFormFieldModule, UniTabModule, UniInputModule, UniSlideToggleModule } from '@uniform/components';

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

    InputRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniFormFieldModule,
    UniInputModule,
    UniTabModule,
    UniSlideToggleModule,
  ],
})
export class InputModule { }
