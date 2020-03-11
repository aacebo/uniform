import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  moduleId: module.id,
  exportAs: 'uniGridCell',
  selector: 'uni-grid-cell, [uniGridCell]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./grid-cell.component.scss'],
  host: {
    class: 'grid-cell',
    '[style.flex]': 'flex',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniGridCellComponent {
  @Input()
  get flex() { return this._flex; }
  set flex(v: string) {
    this._flex = v;
    this._cdr.markForCheck();
  }
  private _flex = '1 1 auto';

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
