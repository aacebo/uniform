import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniArrowComponent } from './arrow.component';

@NgModule({
  declarations: [UniArrowComponent],
  exports: [UniArrowComponent],
  imports: [CommonModule]
})
export class UniArrowModule { }
