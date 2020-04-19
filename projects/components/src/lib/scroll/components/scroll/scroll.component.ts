import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  Input,
} from '@angular/core';
import { CdkScrollable } from '@angular/cdk/overlay';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';

import { uniSubscribableMixin } from '../../../core/mixins/subscribable.mixin';
import { pctToPx } from '../../../core/utils/pct-to-px/pct-to-px.util';
import { pxToPct } from '../../../core/utils/px-to-pct/px-to-pct.util';

import { UniResizeObserverService } from '../../../resize-observer/resize-observer.service';
import { UniScrollMode } from '../../enums/scroll-mode.enum';

class UniScrollBase { }
const _UniScrollMixinBase = uniSubscribableMixin(UniScrollBase);

@Component({
  moduleId: module.id,
  exportAs: 'uniScroll',
  selector: '[uniScroll], uni-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  host: {
    class: 'uni-scroll',
    '[class.uni-scroll--side]': 'mode === UniScrollMode.Side',
    '[class.uni-scroll--over]': 'mode === UniScrollMode.Over',
    '[class.uni-scroll--y]': 'hasY',
    '[class.uni-scroll--x]': 'hasX',
    '[style.padding-right.px]': 'hasY && mode === UniScrollMode.Side ? size : undefined',
    '[style.padding-bottom.px]': 'hasX && mode === UniScrollMode.Side ? size : undefined',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniScrollComponent extends _UniScrollMixinBase implements AfterViewInit {
  @Input() scrollStyle: ScrollBehavior = 'smooth';

  @Input()
  get size() { return this._size; }
  set size(v: number) {
    this._size = coerceNumberProperty(v);
    this._cdr.markForCheck();
  }
  private _size = 14;

  @Input()
  get mode() { return this._mode; }
  set mode(v: UniScrollMode) {
    if (v) {
      this._mode = v;
      this._cdr.markForCheck();
    }
  }
  private _mode = UniScrollMode.Over;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = v;
    this._cdr.markForCheck();
  }
  private _disabled?: boolean;

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

  readonly UniScrollMode = UniScrollMode;

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
      left: startPx + (e * this._xScrollMagnifier),
    });
  }

  scrollToY(e: number) {
    const sizePx = pctToPx(this.ySize, this._el.nativeElement.scrollHeight);

    this.scrollable.scrollTo({
      behavior: this.scrollStyle,
      top: (e * this._yScrollMagnifier) - (sizePx / 2),
    });
  }

  scrollToX(e: number) {
    const sizePx = pctToPx(this.xSize, this._el.nativeElement.scrollWidth);

    this.scrollable.scrollTo({
      behavior: this.scrollStyle,
      left: (e * this._xScrollMagnifier) - (sizePx / 2),
    });
  }

  private _onResize(_: Partial<DOMRectReadOnly>) {
    this._cdr.detectChanges();
  }
}
