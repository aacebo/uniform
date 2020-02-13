import { Directive, Output, EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';

import { UniResizeObserverService } from './resize-observer.service';

@Directive({
  exportAs: 'uniResizeObserver',
  selector: '[uniResizeObserver]',
})
export class UniResizeObserverDirective implements OnInit, OnDestroy {
  @Output('uniResizeObserver') resize = new EventEmitter<Partial<DOMRectReadOnly>>();

  private _observer: ResizeObserver;

  constructor(
    private readonly _el: ElementRef<HTMLElement>,
    private readonly _resizeObserverService: UniResizeObserverService,
  ) {}

  ngOnInit() {
    this._observer = this._resizeObserverService.observe(this._el.nativeElement, e => {
      this.resize.emit(e);
    });
  }

  ngOnDestroy() {
    this._observer.unobserve(this._el.nativeElement);
  }
}
