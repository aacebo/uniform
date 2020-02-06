import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniMarkedComponent } from './marked.component';

@NgModule({
  declarations: [UniMarkedComponent],
  exports: [UniMarkedComponent],
  imports: [CommonModule],
})
export class UniMarkedModule { }
