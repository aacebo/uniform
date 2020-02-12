import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniCardModule, UniTabModule, UniButtonModule, UniIconModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [CardComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    CardRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniCardModule,
    UniTabModule,
    UniButtonModule,
    UniIconModule,
  ],
})
export class CardModule { }
