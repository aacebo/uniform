import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTabModule, UniButtonModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [TabComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    TabRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniTabModule,
    UniButtonModule,
  ],
})
export class TabModule { }
