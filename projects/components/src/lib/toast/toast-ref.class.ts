import { EventEmitter } from '@angular/core';
import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';

export class UniToastRef {
  readonly closed = new EventEmitter<void>();

  get config() {
    return this._overlayRef.getConfig();
  }

  get position() {
    return this._overlayRef.overlayElement.getBoundingClientRect();
  }

  constructor(private readonly _overlayRef: OverlayRef) {}

  dismiss() {
    this.closed.emit();
    this._overlayRef.detach();
  }

  updatePosition(strategy: PositionStrategy) {
    this._overlayRef.updatePositionStrategy(strategy);
  }
}
