import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniButtonModule, UniIconModule, UniCardModule, UniCodeModule } from '@uniform/components';

import { CodeExampleComponent } from './code-example.component';

@NgModule({
  declarations: [CodeExampleComponent],
  exports: [CodeExampleComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,

    UniButtonModule,
    UniIconModule,
    UniCardModule,
    UniCodeModule,
  ],
})
export class CodeExampleModule { }
