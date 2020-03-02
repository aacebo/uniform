import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniDraggableDirective } from './draggable.directive';

@NgModule({
  declarations: [UniDraggableDirective],
  exports: [UniDraggableDirective],
  imports: [CommonModule],
})
export class UniDraggableModule { }
