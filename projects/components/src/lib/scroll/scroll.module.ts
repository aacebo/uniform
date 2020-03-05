import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { UniResizeObserverModule } from '../resize-observer';
import { UniDraggableModule } from '../draggable';

import { UniScrollComponent } from './components/scroll/scroll.component';
import { UniScrollbarComponent } from './components/scrollbar/scrollbar.component';

const declarations = [
  UniScrollComponent,
  UniScrollbarComponent,
];

@NgModule({
  declarations,
  exports: [UniScrollbarComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    UniResizeObserverModule,
    UniDraggableModule,
  ],
})
export class UniScrollModule { }
