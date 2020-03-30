import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export class UniDialogRef<T = any> {
  get closed$() { return this._closed$.asObservable(); }
  private readonly _closed$ = new Subject<T | void>();

  constructor(
    private readonly _overlayRef: OverlayRef,
    private readonly _disableClose: boolean,
  ) {
    if (!this._disableClose) {
      this._overlayRef.backdropClick()
                      .pipe(take(1))
                      .subscribe(() => this.dismiss());
    }
  }

  close(result: T) {
    this._closed$.next(result);
    this._closed$.complete();
    this._overlayRef.detach();
  }

  dismiss() {
    this._closed$.next();
    this._closed$.complete();
    this._overlayRef.detach();
  }
}
