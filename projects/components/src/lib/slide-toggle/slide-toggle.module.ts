import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UniSlideToggleComponent } from './slide-toggle.component';

@NgModule({
  declarations: [UniSlideToggleComponent],
  exports: [UniSlideToggleComponent],
  imports: [CommonModule, FormsModule],
})
export class UniSlideToggleModule { }
