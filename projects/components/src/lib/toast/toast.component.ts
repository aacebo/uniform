import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';

import { UNI_TOAST_OPTIONS } from './toast-options.constant';
import { UNI_TOAST_CONFIG } from './toast-config.constant';
import { IUniToastOptions } from './toast-options.interface';
import { IUniToastConfig } from './toast-config.interface';
import { UniToastRef } from './toast-ref.class';

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
    '[class.danger]': 'options.type === "danger"',
    '[class.dismissable]': 'config.tapToDismiss',
    '(click)': 'onClick()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniToastComponent implements OnInit {
  constructor(
    @Inject(UNI_TOAST_CONFIG) readonly config: IUniToastConfig,
    @Inject(UNI_TOAST_OPTIONS) readonly options: IUniToastOptions,
    private readonly _toastRef: UniToastRef
  ) {}

  ngOnInit() {
    if (this.options.duration) {
      setTimeout(() => {
        this._toastRef.dismiss();
      }, this.options.duration);
    }
  }

  onClick() {
    if (this.config.tapToDismiss) {
      this._toastRef.dismiss();
    }
  }
}
