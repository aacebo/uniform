import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTabModule, UniSplitModule, UniButtonModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { SplitComponent } from './split.component';
import { SplitRoutingModule } from './split-routing.module';

@NgModule({
  declarations: [SplitComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    SplitRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniTabModule,
    UniSplitModule,
    UniButtonModule,
  ],
})
export class SplitModule { }
