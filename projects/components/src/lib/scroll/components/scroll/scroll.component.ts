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

import { UniSubscriptionHelper } from '../../../core/helpers';

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
export class UniScrollComponent extends UniSubscriptionHelper implements AfterViewInit {
  @ViewChild(CdkScrollable)
  readonly scrollable: CdkScrollable;

  gutterSize: { x: number; y: number; };

  get hasY() {
    return this._el ? this._el.nativeElement.scrollHeight > this._el.nativeElement.clientHeight : false;
  }

  get hasX() {
    return this._el ? this._el.nativeElement.scrollWidth > this._el.nativeElement.clientWidth : false;
  }

  get yPercent() {
    return ((this._el.nativeElement.scrollTop + this._el.nativeElement.clientHeight) / this._el.nativeElement.scrollHeight) * 100;
  }

  get xPercent() {
    return ((this._el.nativeElement.scrollLeft + this._el.nativeElement.clientWidth) / this._el.nativeElement.scrollWidth) * 100;
  }

  get yStart() {
    return this._el.nativeElement.scrollTop;
  }

  get xStart() {
    return this._el.nativeElement.scrollLeft;
  }

  private _el: ElementRef<HTMLElement>;

  constructor(private readonly _cdr: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit() {
    this._el = this.scrollable.getElementRef();

    this.gutterSize = {
      y: this._el.nativeElement.offsetWidth - this._el.nativeElement.clientWidth,
      x: this._el.nativeElement.offsetHeight - this._el.nativeElement.clientHeight,
    };

    this.scrollable.elementScrolled().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this._cdr.detectChanges();
    });

    this._cdr.detectChanges();
  }
}
