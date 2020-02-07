import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniTabComponent } from './components/tab/tab.component';
import { UniTabGroupComponent } from './components/tab-group/tab-group.component';
import { UniTabLabelComponent } from './components/tab-label/tab-label.component';
import { UniTabBodyDirective } from './directives/tab-body/tab-body.directive';

const declarations = [
  UniTabComponent,
  UniTabGroupComponent,
  UniTabLabelComponent,
  UniTabBodyDirective,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class UniTabModule { }
