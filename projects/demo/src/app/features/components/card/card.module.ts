import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniCardModule, UniTabModule, UniButtonModule } from '@uniform/components';

import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    CardRoutingModule,
    UniCardModule,
    UniTabModule,
    UniButtonModule
  ]
})
export class CardModule { }
