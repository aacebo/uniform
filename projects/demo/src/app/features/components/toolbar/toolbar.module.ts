import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniToolbarModule, UniCardModule, UniTabModule } from '@uniform/components';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    UniToolbarModule,
    UniCardModule,
    UniTabModule
  ]
})
export class ToolbarModule { }
