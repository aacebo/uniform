import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniJsonTreeModule, UniTabModule, UniCodeModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { JsonTreeRoutingModule } from './json-tree-routing.module';
import { JsonTreeComponent } from './json-tree.component';

@NgModule({
  declarations: [JsonTreeComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    JsonTreeRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniJsonTreeModule,
    UniTabModule,
    UniCodeModule,
  ],
})
export class JsonTreeModule { }
