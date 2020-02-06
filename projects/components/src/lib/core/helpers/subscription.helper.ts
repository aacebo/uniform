import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class UniSubscriptionHelper implements OnDestroy {
  private readonly _destroy$ = new Subject<void>();

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
