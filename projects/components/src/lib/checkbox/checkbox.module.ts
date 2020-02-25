import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UniCheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [UniCheckboxComponent],
  exports: [UniCheckboxComponent],
  imports: [CommonModule, FormsModule],
})
export class UniCheckboxModule { }
