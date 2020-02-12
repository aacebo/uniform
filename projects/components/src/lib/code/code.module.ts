import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniCodeComponent } from './code.component';

@NgModule({
  declarations: [UniCodeComponent],
  exports: [UniCodeComponent],
  imports: [CommonModule],
})
export class UniCodeModule { }
