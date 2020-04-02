import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniScrollModule } from '../scroll/scroll.module';

import { UniTabComponent } from './components/tab/tab.component';
import { UniTabGroupComponent } from './components/tab-group/tab-group.component';
import { UniTabLabelComponent } from './components/tab-label/tab-label.component';
import { UniTabBodyDirective } from './directives/tab-body/tab-body.directive';
import { UniTabLabelDirective } from './directives/tab-label/tab-label.directive';

const declarations = [
  UniTabComponent,
  UniTabGroupComponent,
  UniTabLabelComponent,
  UniTabBodyDirective,
  UniTabLabelDirective,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule, UniScrollModule],
})
export class UniTabModule { }
