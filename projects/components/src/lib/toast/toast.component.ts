import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';

import { UNI_TOAST_OPTIONS } from './toast-options.constant';
import { UNI_TOAST_CONFIG } from './toast-config.constant';
import { IUniToastOptions } from './toast-options.interface';
import { IUniToastConfig } from './toast-config.interface';
import { UniToastOverlayRef } from './toast-overlay-ref.class';

@Component({
  moduleId: module.id,
  selector: 'uni-toast',
  exportAs: 'uniToast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  host: {
    class: 'uni-toast',
    '[class.info]': 'options.type === "info"',
    '[class.success]': 'options.type === "success"',
    '[class.warning]': 'options.type === "warning"',
    '[class.danger]': 'options.type === "danger"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniToastComponent implements OnInit {
  constructor(
    @Inject(UNI_TOAST_CONFIG) readonly config: IUniToastConfig,
    @Inject(UNI_TOAST_OPTIONS) readonly options: IUniToastOptions,
    readonly toastrRef: UniToastOverlayRef
  ) {}

  ngOnInit() {
    if (this.options.duration) {
      setTimeout(() => {
        this.toastrRef.dismiss();
      }, this.options.duration);
    }
  }
}
