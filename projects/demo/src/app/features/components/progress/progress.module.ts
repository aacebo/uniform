import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniProgressModule, UniTabModule, UniCodeModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress-routing.module';

@NgModule({
  declarations: [ProgressComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ProgressRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniProgressModule,
    UniCodeModule,
    UniTabModule,
  ],
})
export class ProgressModule { }
