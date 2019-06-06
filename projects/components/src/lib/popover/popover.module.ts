import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniArrowModule } from '../core/arrow';
import { UniPopoverComponent } from './popover.component';
import { UniPopoverDirective } from './popover.directive';

@NgModule({
  declarations: [UniPopoverComponent, UniPopoverDirective],
  entryComponents: [UniPopoverComponent],
  exports: [UniPopoverDirective],
  imports: [CommonModule, OverlayModule, UniArrowModule]
})
export class UniPopoverModule {}
