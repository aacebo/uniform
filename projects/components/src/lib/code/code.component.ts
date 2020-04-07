import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import hljs from 'highlight.js';

@Component({
  moduleId: module.id,
  selector: 'uni-code',
  exportAs: 'uniCode',
  template: `<pre [innerHTML]="html"></pre>`,
  styleUrls: ['./code.component.scss'],
  host: { class: 'uni-code' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniCodeComponent {
  @Input()
  get code() { return this._code; }
  set code(v: string) {
    this._code = v;

    if (v) {
      this.html = this._language ? hljs.highlight(this._language, v).value : hljs.highlightAuto(v).value;
    } else {
      this.html = undefined;
    }
  }
  private _code: string;

  @Input()
  get language() { return this._language; }
  set language(v: string) {
    this._language = v;
  }
  private _language?: string;

  get html() { return this._html; }
  set html(v: string) {
    this._html = v;
    this._cdr.markForCheck();
  }
  private _html?: string;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
  ) { }
}
