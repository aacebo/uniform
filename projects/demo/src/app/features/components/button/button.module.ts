import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniButtonModule, UniIconModule, UniTabModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';
import { CodeExampleModule } from '../../code-example';

import { ButtonComponent } from './button.component';
import { ButtonRoutingModule } from './button-routing.module';

@NgModule({
  declarations: [ButtonComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    DocViewerModule,
    CodeExampleModule,

    UniButtonModule,
    UniIconModule,
    UniTabModule,
  ],
})
export class ButtonModule { }
