import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { UniScrollComponent } from './components/scroll/scroll.component';
import { UniScrollbarComponent } from './components/scrollbar/scrollbar.component';

const declarations = [
  UniScrollComponent,
  UniScrollbarComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, ScrollingModule],
})
export class UniScrollModule { }
