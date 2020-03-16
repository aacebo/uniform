import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniBadgeComponent } from './badge.component';
import { UniBadgeDirective } from './badge.directive';

@NgModule({
  declarations: [UniBadgeDirective, UniBadgeComponent],
  exports: [UniBadgeDirective, UniBadgeComponent],
  entryComponents: [UniBadgeComponent],
  imports: [CommonModule],
})
export class UniBadgeModule { }
