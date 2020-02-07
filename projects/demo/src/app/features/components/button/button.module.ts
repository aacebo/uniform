import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniButtonModule, UniIconModule, UniCardModule, UniTabModule } from '@uniform/components';

import { DocViewerModule } from '../../doc-viewer';

import { ButtonComponent } from './button.component';
import { ButtonRoutingModule } from './button-routing.module';

@NgModule({
  declarations: [ButtonComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    DocViewerModule,

    UniButtonModule,
    UniIconModule,
    UniCardModule,
    ButtonRoutingModule,
    UniTabModule,
  ],
})
export class ButtonModule {}
