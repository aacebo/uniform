import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';
import { CdkScrollable } from '@angular/cdk/overlay';
import { takeUntil } from 'rxjs/operators';

import { UniSubscription } from '../../../core/classes';
import { pxToPct, pctToPx } from '../../../core/utils';
import { UniResizeObserverService } from '../../../resize-observer';

@Component({
  moduleId: module.id,
  exportAs: 'uniScroll',
  selector: '[uniScroll], uni-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  host: { class: 'uni-scroll' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniScrollComponent extends UniSubscription implements AfterViewInit {
  @ViewChild(CdkScrollable)
  readonly scrollable: CdkScrollable;

  get hasY() {
    return this._el ? this._el.nativeElement.scrollHeight > this._el.nativeElement.clientHeight : false;
  }

  get hasX() {
    return this._el ? this._el.nativeElement.scrollWidth > this._el.nativeElement.clientWidth : false;
  }

  get ySize() {
    return pxToPct(this._el.nativeElement.clientHeight, this._el.nativeElement.scrollHeight);
  }

  get xSize() {
    return pxToPct(this._el.nativeElement.clientWidth, this._el.nativeElement.scrollWidth);
  }

  get yStart() {
    return pxToPct(this._el.nativeElement.scrollTop, this._el.nativeElement.scrollHeight);
  }

  get xStart() {
    return pxToPct(this._el.nativeElement.scrollLeft, this._el.nativeElement.scrollWidth);
  }

  private get _yScrollMagnifier() {
    return this._el.nativeElement.scrollHeight / this._el.nativeElement.clientHeight;
  }

  private get _xScrollMagnifier() {
    return this._el.nativeElement.scrollWidth / this._el.nativeElement.clientWidth;
  }

  private _el: ElementRef<HTMLElement>;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _resizeObserver: UniResizeObserverService,
  ) {
    super();
  }

  ngAfterViewInit() {
    this._el = this.scrollable.getElementRef();
    this._resizeObserver.observe(this._el.nativeElement, this._onResize.bind(this), 200);
    this.scrollable.elementScrolled().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this._cdr.detectChanges();
    });

    this._cdr.detectChanges();
  }

  scrollY(e: number) {
    const startPx = pctToPx(this.yStart, this._el.nativeElement.scrollHeight);

    this.scrollable.scrollTo({
      behavior: 'auto',
      top: startPx + (e * this._yScrollMagnifier),
    });
  }

  scrollX(e: number) {
    const startPx = pctToPx(this.xStart, this._el.nativeElement.scrollWidth);

    this.scrollable.scrollTo({
      behavior: 'auto',
      top: startPx + (e * this._xScrollMagnifier),
    });
  }

  scrollToY(e: number) {
    const sizePx = pctToPx(this.ySize, this._el.nativeElement.scrollHeight);

    this.scrollable.scrollTo({
      behavior: 'auto',
      top: (e * this._yScrollMagnifier) - (sizePx / 2),
    });
  }

  scrollToX(e: number) {
    const sizePx = pctToPx(this.xSize, this._el.nativeElement.scrollWidth);

    this.scrollable.scrollTo({
      behavior: 'auto',
      top: (e * this._xScrollMagnifier) - (sizePx / 2),
    });
  }

  private _onResize(_: Partial<DOMRectReadOnly>) {
    this._cdr.detectChanges();
  }
}
