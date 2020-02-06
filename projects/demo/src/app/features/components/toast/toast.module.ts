import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UniCardModule, UniTabModule, UniButtonModule, UniToastModule, UniFormFieldModule, UniSelectModule } from '@uniform/components';

import { ToastComponent } from './toast.component';
import { ToastRoutingModule } from './toast-routing.module';

@NgModule({
  declarations: [ToastComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastRoutingModule,
    UniCardModule,
    UniTabModule,
    UniButtonModule,
    UniToastModule,
    UniFormFieldModule,
    UniSelectModule,
  ],
})
export class ToastModule { }
