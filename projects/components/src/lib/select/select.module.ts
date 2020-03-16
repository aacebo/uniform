import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniOptionModule } from '../core/option/option.module';

import { UniSelectComponent } from './components/select/select.component';
import { UniSelectPanelComponent } from './components/select-panel/select-panel.component';

@NgModule({
  declarations: [UniSelectComponent, UniSelectPanelComponent],
  exports: [UniSelectComponent, UniOptionModule],
  entryComponents: [UniSelectPanelComponent],
  imports: [CommonModule, OverlayModule],
})
export class UniSelectModule { }
