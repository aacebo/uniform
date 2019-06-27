import { EventEmitter } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { take } from 'rxjs/operators';

import { IUniDialogOptions } from './dialog-options.interface';

export class UniDialogRef {
  readonly closed = new EventEmitter<void>();

  constructor(
    private readonly _overlayRef: OverlayRef,
    private readonly _options: IUniDialogOptions
  ) {
    this._overlayRef.backdropClick().pipe(take(1)).subscribe(() => {
      if (!this._options.disableClose) {
        this.dismiss();
      }
    });
  }

  dismiss() {
    this.closed.emit();
    this._overlayRef.detach();
  }
}
