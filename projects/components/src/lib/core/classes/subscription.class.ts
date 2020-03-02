import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class UniSubscription implements OnDestroy {
  readonly destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
