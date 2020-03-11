import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniGridModule, UniTabModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [GridComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,

    GridRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniTabModule,
    UniGridModule,
  ],
})
export class GridModule { }
