import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniSplitComponent } from './components/split/split.component';
import { UniSplitAreaComponent } from './components/area/split-area.component';
import { UniSplitHandleComponent } from './components/handle/split-handle.component';

const declarations = [
  UniSplitComponent,
  UniSplitAreaComponent,
  UniSplitHandleComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class UniSplitModule { }
