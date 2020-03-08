import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  UniButtonModule,
  UniIconModule,
  UniTabModule,
  UniBadgeModule,
  UniFormFieldModule,
  UniSelectModule,
  UniSlideToggleModule,
} from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { BadgeComponent } from './badge.component';
import { BadgeRoutingModule } from './badge-routing.module';

@NgModule({
  declarations: [BadgeComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    BadgeRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniButtonModule,
    UniIconModule,
    UniTabModule,
    UniBadgeModule,
    UniFormFieldModule,
    UniSelectModule,
    UniSlideToggleModule,
  ],
})
export class BadgeModule { }
