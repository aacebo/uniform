import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

Injectable({ providedIn: 'root' });
@Injectable()
export class ToolbarService {
  private readonly base = '@uniform/components';
  private readonly component$: BehaviorSubject<string> = new BehaviorSubject(undefined);

  get $title() {
    return this.component$.pipe(
      map(c => `${this.base}${c ? `/${c}` : '' }`),
    );
  }

  get component() {
    return this.component$.value;
  }

  setTitle(component: string) {
    this.component$.next(component);
  }
}
