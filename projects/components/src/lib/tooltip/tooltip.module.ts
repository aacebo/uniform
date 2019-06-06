import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniArrowModule } from '../core/arrow';
import { UniTooltipComponent } from './tooltip.component';
import { UniTooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [UniTooltipComponent, UniTooltipDirective],
  entryComponents: [UniTooltipComponent],
  exports: [UniTooltipDirective],
  imports: [CommonModule, OverlayModule, UniArrowModule]
})
export class UniTooltipModule {}
