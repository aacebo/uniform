import { OverlayRef } from '@angular/cdk/overlay';

export class UniToastOverlayRef {
  constructor(private readonly _overlayRef: OverlayRef) {}

  dismiss() {
    this._overlayRef.dispose();
  }
}
