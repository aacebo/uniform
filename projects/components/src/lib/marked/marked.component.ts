import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  SecurityContext,
  ElementRef,
  ViewEncapsulation,
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
  encapsulation: ViewEncapsulation.None,
})
export class UniMarkedComponent {
  @Input()
  get markdown() { return this._markdown; }
  set markdown(v: string) {
    this._markdown = v;
    this.html = marked(v || '', this._options);
  }
  private _markdown: string;

  @Input()
  get highlight() { return this._highlight; }
  set highlight(v: boolean) {
    if (v !== this._highlight) {
      this._highlight = coerceBooleanProperty(v);
      this._options.highlight = this._highlight ? this._highlightCodeBlock.bind(this) : null;
      this._cdr.markForCheck();
    }
  }
  private _highlight?: boolean;

  @Input()
  get sanitize() { return this._sanitize; }
  set sanitize(v: boolean) {
    if (v !== this._sanitize) {
      this._sanitize = coerceBooleanProperty(v);
      this._cdr.markForCheck();
    }
  }
  private _sanitize?: boolean;

  get html() { return this._html; }
  set html(v: string) {
    this._html = this._sanitize ? this._sanitizer.sanitize(SecurityContext.HTML, v) : v;
    this._el.nativeElement.innerHTML = this._html;
    this._cdr.markForCheck();
  }
  private _html?: string;

  private _options: marked.MarkedOptions = {
    silent: true,
    smartLists: true,
    gfm: true,
    breaks: true,
    highlight: null,
  };

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _sanitizer: DomSanitizer,
    private readonly _el: ElementRef<HTMLElement>,
  ) { }

  private _highlightCodeBlock(code: string) {
    return hljs.highlightAuto(code).value;
  }
}
