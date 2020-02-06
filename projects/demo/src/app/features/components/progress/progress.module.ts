import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniProgressModule, UniCardModule, UniTabModule } from '@uniform/components';

import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress-routing.module';

@NgModule({
  declarations: [ProgressComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    UniProgressModule,
    UniCardModule,
    UniTabModule,
    ProgressRoutingModule,
  ],
})
export class ProgressModule { }
