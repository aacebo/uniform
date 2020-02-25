import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTabModule, UniSlideToggleModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { SlideToggleComponent } from './slide-toggle.component';
import { SlideToggleRoutingModule } from './slide-toggle-routing.module';

@NgModule({
  declarations: [SlideToggleComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    SlideToggleRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniTabModule,
    UniSlideToggleModule,
  ],
})
export class SlideToggleModule { }
