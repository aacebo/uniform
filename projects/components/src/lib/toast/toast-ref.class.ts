import { EventEmitter } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

export class UniToastRef {
  readonly closed = new EventEmitter<void>();

  get config() {
    return this._overlayRef.getConfig();
  }

  constructor(private readonly _overlayRef: OverlayRef) {}

  dismiss() {
    this.closed.emit();
    this._overlayRef.detach();
  }
}
