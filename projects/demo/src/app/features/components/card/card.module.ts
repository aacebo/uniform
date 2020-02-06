import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniCardModule, UniTabModule, UniButtonModule } from '@uniform/components';

import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [CardComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    CardRoutingModule,
    UniCardModule,
    UniTabModule,
    UniButtonModule,
  ],
})
export class CardModule { }
