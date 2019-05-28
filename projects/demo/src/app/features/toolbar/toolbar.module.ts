import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniToolbarModule, UniButtonModule, UniIconModule } from '@uniform/components';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, UniToolbarModule, UniButtonModule, UniIconModule]
})
export class ToolbarModule {}
