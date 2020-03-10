import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniJsonTreeComponent } from './json-tree.component';

@NgModule({
  declarations: [UniJsonTreeComponent],
  exports: [UniJsonTreeComponent],
  imports: [CommonModule],
})
export class UniJsonTreeModule { }
