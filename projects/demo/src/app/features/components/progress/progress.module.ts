import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UniProgressModule, UniTabModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress-routing.module';

@NgModule({
  declarations: [ProgressComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    ProgressRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniProgressModule,
    UniTabModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class ProgressModule { }
