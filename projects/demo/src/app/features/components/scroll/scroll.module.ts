import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTabModule, UniScrollModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { ScrollComponent } from './scroll.component';
import { ScrollRoutingModule } from './scroll-routing.module';

@NgModule({
  declarations: [ScrollComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    ScrollRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniTabModule,
    UniScrollModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class ScrollModule { }
