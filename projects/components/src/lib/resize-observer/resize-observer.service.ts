import { Injectable } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';

@Injectable({
  providedIn: 'root',
})
export class UniResizeObserverService {
  private _timer: NodeJS.Timer;

  observe(el: HTMLElement, cb: (e: Partial<DOMRectReadOnly>) => void, throttle = 100) {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (this._timer) {
          clearTimeout(this._timer);
          this._timer = undefined;
        }

        this._timer = setTimeout(() => cb(entry.contentRect), throttle);
      }
    });

    observer.observe(el);
    return observer;
  }
}
