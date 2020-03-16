import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniOptionModule } from '../core/option/option.module';

import { UniContextMenuComponent } from './context-menu.component';
import { UniContextMenuDirective } from './context-menu.directive';

@NgModule({
  declarations: [UniContextMenuComponent, UniContextMenuDirective],
  entryComponents: [UniContextMenuComponent],
  exports: [UniContextMenuDirective, UniOptionModule],
  imports: [CommonModule, OverlayModule],
})
export class UniContextMenuModule { }
