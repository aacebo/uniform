import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniContextMenuComponent } from './context-menu.component';
import { UniContextMenuDirective } from './context-menu.directive';

@NgModule({
  declarations: [UniContextMenuComponent, UniContextMenuDirective],
  entryComponents: [UniContextMenuComponent],
  exports: [UniContextMenuDirective],
  imports: [CommonModule, OverlayModule],
})
export class UniContextMenuModule { }
