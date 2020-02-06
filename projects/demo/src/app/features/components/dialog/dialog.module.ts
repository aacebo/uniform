import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniTabModule, UniCardModule, UniDialogModule, UniButtonModule } from '@uniform/components';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@NgModule({
  declarations: [DialogComponent, ExampleDialogComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [ExampleDialogComponent],
  imports: [
    CommonModule,
    UniTabModule,
    UniCardModule,
    UniDialogModule,
    UniButtonModule,
    DialogRoutingModule,
  ],
})
export class DialogModule { }
