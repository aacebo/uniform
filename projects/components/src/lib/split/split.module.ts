import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniDraggableModule } from '../draggable/draggable.module';

import { UniSplitComponent } from './components/split/split.component';
import { UniSplitAreaComponent } from './components/split-area/split-area.component';

const declarations = [
  UniSplitComponent,
  UniSplitAreaComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, UniDraggableModule],
})
export class UniSplitModule { }
