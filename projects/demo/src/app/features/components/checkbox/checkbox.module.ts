import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniCheckboxModule, UniTabModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { CheckboxComponent } from './checkbox.component';
import { CheckboxRoutingModule } from './checkbox-routing.module';

@NgModule({
  declarations: [CheckboxComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    CheckboxRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniCheckboxModule,
    UniTabModule,
  ],
})
export class CheckboxModule { }
