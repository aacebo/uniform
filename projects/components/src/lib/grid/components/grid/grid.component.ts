import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  moduleId: module.id,
  exportAs: 'uniGrid',
  selector: 'uni-grid-row, uni-grid-column, [uniGridRow], [uniGridColumn]',
  template: `
    <ng-content select="uni-grid-cell, [uniGridCell]"></ng-content>
    <ng-content select="uni-grid-row, [uniGridRow]"></ng-content>
    <ng-content select="uni-grid-column, [uniGridColumn]"></ng-content>
  `,
  styleUrls: ['./grid.component.scss'],
  host: {
    class: 'uni-grid',
    '[style.flex]': 'flex',
    '[style.flex-wrap]': 'wrap',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniGridComponent {
  @Input()
  get flex() { return this._flex; }
  set flex(v: string) {
    this._flex = v;
    this._cdr.markForCheck();
  }
  private _flex = '1 1 auto';

  @Input()
  get wrap() { return this._wrap; }
  set wrap(v: string) {
    this._wrap = v;
    this._cdr.markForCheck();
  }
  private _wrap?: string;

  private get _name() {
    return this._el.nativeElement.nodeName.toLowerCase();
  }

  constructor(
    private readonly _el: ElementRef<HTMLElement>,
    private readonly _cdr: ChangeDetectorRef,
  ) {
    this._el.nativeElement.classList.add(this._name);
  }
}
