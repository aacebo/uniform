import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniToolbarModule, UniButtonModule, UniIconModule, UniTooltipModule, UniPopoverModule } from '@uniform/components';

import { ToolbarComponent } from './toolbar.component';
import { ToolbarService } from './toolbar.service';

@NgModule({
  declarations: [ToolbarComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [ToolbarComponent],
  providers: [ToolbarService],
  imports: [
    CommonModule,

    UniToolbarModule,
    UniButtonModule,
    UniIconModule,
    UniTooltipModule,
    UniPopoverModule,
  ],
})
export class ToolbarModule { }
