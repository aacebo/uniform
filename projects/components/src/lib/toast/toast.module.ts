import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniToastComponent } from './toast.component';
import { UniToastService } from './toast.service';
import { UNI_TOAST_CONFIG, UNI_TOAST_DEFAULT_CONFIG } from './toast-config.constant';

@NgModule({
  declarations: [UniToastComponent],
  providers: [UniToastService],
  entryComponents: [UniToastComponent],
  imports: [CommonModule, OverlayModule]
})
export class UniToastModule {
  static forRoot(config = UNI_TOAST_DEFAULT_CONFIG): ModuleWithProviders {
    return {
      ngModule: UniToastModule,
      providers: [{
        provide: UNI_TOAST_CONFIG,
        useValue: config
      }]
    };
  }
}
