import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UniTabModule, UniButtonModule, UniToastModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { ToastComponent } from './toast.component';
import { ToastRoutingModule } from './toast-routing.module';

@NgModule({
  declarations: [ToastComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,

    ToastRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniTabModule,
    UniButtonModule,
    UniToastModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class ToastModule { }
