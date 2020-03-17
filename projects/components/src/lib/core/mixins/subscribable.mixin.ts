import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { UniConstructor } from '../types/constructor.type';

export function uniSubscribableMixin<T extends UniConstructor<{}>>(Base: T) {
  class UniSubscribable extends Base implements OnDestroy {
    readonly destroy$ = new Subject<void>();

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }

  return UniSubscribable;
}
