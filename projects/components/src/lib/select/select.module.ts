import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniSelectComponent } from './components/select/select.component';
import { UniOptionComponent } from './components/option/option.component';

const declarations = [
  UniSelectComponent,
  UniOptionComponent
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, OverlayModule]
})
export class UniSelectModule { }
