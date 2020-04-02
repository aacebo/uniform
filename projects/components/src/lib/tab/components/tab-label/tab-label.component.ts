import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  ViewEncapsulation,
  ElementRef,
  AfterContentChecked,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  moduleId: module.id,
  selector: 'uni-tab-label',
  exportAs: 'uniTabLabel',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss'],
  host: {
    class: 'uni-tab-label uni-ellipsis',
    '[class.active]': 'active',
    '[class.disabled]': 'disabled',
    '[title]': 'title',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniTabLabelComponent implements AfterContentChecked {
  @Input()
  get active() { return this._active; }
  set active(v: boolean) {
    this._active = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _active = false;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    this._disabled = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _disabled = false;

  get title() { return this._title; }
  set title(v: string) {
    this._title = v;
    this._cdr.markForCheck();
  }
  private _title?: string;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _el: ElementRef<HTMLElement>,
  ) { }

  ngAfterContentChecked() {
    this.title = this._el.nativeElement.textContent;
  }
}
