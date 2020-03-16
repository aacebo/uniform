import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { UniResizeObserverModule } from '../resize-observer/resize-observer.module';
import { UniDraggableModule } from '../draggable/draggable.module';

import { UniScrollComponent } from './components/scroll/scroll.component';
import { UniScrollbarComponent } from './components/scrollbar/scrollbar.component';

const declarations = [
  UniScrollComponent,
  UniScrollbarComponent,
];

@NgModule({
  declarations,
  exports: [UniScrollComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    UniResizeObserverModule,
    UniDraggableModule,
  ],
})
export class UniScrollModule { }
