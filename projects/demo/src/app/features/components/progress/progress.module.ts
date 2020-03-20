import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniProgressModule, UniTabModule, UniFormFieldModule, UniSelectModule, UniSlideToggleModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress-routing.module';

@NgModule({
  declarations: [ProgressComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    ProgressRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniProgressModule,
    UniTabModule,
    UniFormFieldModule,
    UniSelectModule,
    UniSlideToggleModule,
  ],
})
export class ProgressModule { }
