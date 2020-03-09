import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  UniContextMenuModule,
  UniButtonModule,
  UniTabModule,
  UniSlideToggleModule,
} from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuRoutingModule } from './context-menu-routing.module';

@NgModule({
  declarations: [ContextMenuComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    ContextMenuRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniTabModule,
    UniButtonModule,
    UniContextMenuModule,
    UniSlideToggleModule,
  ],
})
export class ContextMenuModule { }
