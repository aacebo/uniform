import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniResizeObserverDirective } from './resize-observer.directive';

@NgModule({
  declarations: [UniResizeObserverDirective],
  exports: [UniResizeObserverDirective],
  imports: [CommonModule],
})
export class UniResizeObserverModule {}
