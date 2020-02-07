import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, SecurityContext, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import marked from 'marked';

@Component({
  moduleId: module.id,
  selector: 'uni-marked',
  exportAs: 'uniMarked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.scss'],
  host: { class: 'uni-marked' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniMarkedComponent {
  @Input()
  get markdown() { return this._markdown; }
  set markdown(v: string) {
    if (v && v !== this._markdown) {
      this._markdown = v;
      this.html = marked(v);
      this._cdr.markForCheck();
    }
  }
  private _markdown: string;

  get html() { return this._html; }
  set html(v: string) {
    this._html = this._sanitizer.sanitize(SecurityContext.HTML, v);
    this._el.nativeElement.innerHTML = this._html;
  }
  private _html?: string;

  constructor(
    private readonly _cdr: ChangeDetectorRef,
    private readonly _sanitizer: DomSanitizer,
    private readonly _el: ElementRef<HTMLElement>,
  ) { }
}
