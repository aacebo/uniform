import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniHotkeyService } from './hotkey.service';

@NgModule({
  providers: [UniHotkeyService],
  imports: [CommonModule],
})
export class UniHotkeyModule { }
