import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniSelectModule, UniFormFieldModule, UniTabModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { SelectComponent } from './select.component';
import { SelectRoutingModule } from './select-routing.module';

@NgModule({
  declarations: [SelectComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    SelectRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniSelectModule,
    UniFormFieldModule,
    UniTabModule,
  ],
})
export class SelectModule { }
