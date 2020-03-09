import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniOptionComponent } from './option.component';

@NgModule({
  declarations: [UniOptionComponent],
  exports: [UniOptionComponent],
  imports: [CommonModule],
})
export class UniOptionModule { }
