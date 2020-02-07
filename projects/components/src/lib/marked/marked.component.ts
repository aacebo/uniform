import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  SecurityContext,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import marked from 'marked';
import hljs from 'highlight.js';

@Component({
  moduleId: module.id,
  selector: 'uni-marked',
  exportAs: 'uniMarked',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./marked.component.scss'],
  host: { class: 'uni-marked' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniMarkedComponent {
  @Input()
  get markdown() { return this._markdown; }
  set markdown(v: string) {
    if (v && v.length > 0 && v !== this._markdown) {
      this._markdown = v;
      this.html = marked(v, {
        highlight: this._highlightBlock.bind(this),
      }, this._error.bind(this));

      this._cdr.markForCheck();
    }
  }
  private _markdown: string;

  @Input()
  get highlight() { return this._highlight; }
  set highlight(v: boolean) {
    this._highlight = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _highlight?: boolean;

  @Input()
  get sanitize() { return this._sanitize; }
  set sanitize(v: boolean) {
    this._sanitize = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _sanitize?: boolean;

  @Output() error = new EventEmitter<{ error: any; result: string; }>();

  get html() { return this._html; }
  set html(v: string) {
    this._html = this._sanitize ? this._sanitizer.sanitize(SecurityContext.HTML, v) : v;
    this._el.nativeElement.innerHTML = this._html;
  }
  private _html?: string;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _sanitizer: DomSanitizer,
    private readonly _el: ElementRef<HTMLElement>,
  ) { }

  private _highlightBlock(code: string, lang: string) {
    console.log(code);
    return this._highlight ? hljs.highlight(lang, code).value : code;
  }

  private _error(error: any, result: string) {
    this.error.emit({ error, result });
  }
}
