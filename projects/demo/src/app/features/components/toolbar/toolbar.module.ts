import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniToolbarModule, UniTabModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniToolbarModule,
    UniTabModule,
  ],
})
export class ToolbarModule { }
