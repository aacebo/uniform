import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-label',
  exportAs: 'uniLabel',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  host: { class: 'uni-label' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniLabelComponent {
  get for() { return this._for; }
  set for(v: string) {
    if (v !== this._for) {
      this._for = v;
      this._cdr.markForCheck();
    }
  }
  private _for?: string;

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
