import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniToolbarModule, UniButtonModule, UniIconModule } from '@uniform/components';

import { ToolbarComponent } from './toolbar.component';
import { ToolbarService } from './toolbar.service';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, UniToolbarModule, UniButtonModule, UniIconModule],
  providers: [ToolbarService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarModule {}
