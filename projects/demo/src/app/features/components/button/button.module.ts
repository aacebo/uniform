import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniButtonModule, UniIconModule, UniCardModule, UniTabModule } from '@uniform/components';

import { ButtonComponent } from './button.component';
import { ButtonRoutingModule } from './button-routing.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    UniButtonModule,
    UniIconModule,
    UniCardModule,
    ButtonRoutingModule,
    UniTabModule
  ],
})
export class ButtonModule {}
