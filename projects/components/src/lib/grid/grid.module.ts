import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniGridComponent } from './components/grid/grid.component';
import { UniGridCellComponent } from './components/grid-cell/grid-cell.component';

const declarations = [
  UniGridComponent,
  UniGridCellComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class UniGridModule { }
