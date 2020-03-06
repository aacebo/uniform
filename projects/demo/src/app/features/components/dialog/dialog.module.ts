import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniTabModule, UniDialogModule, UniButtonModule } from '@uniform/components';

import { CodeExampleModule } from '../../code-example';
import { DocViewerModule } from '../../doc-viewer';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@NgModule({
  declarations: [DialogComponent, ExampleDialogComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [ExampleDialogComponent],
  imports: [
    CommonModule,

    DialogRoutingModule,
    CodeExampleModule,
    DocViewerModule,

    UniTabModule,
    UniDialogModule,
    UniButtonModule,
  ],
})
export class DialogModule { }
