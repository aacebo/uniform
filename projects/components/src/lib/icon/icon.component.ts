import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';

import { UniIconService } from './icon.service';

@Component({
  moduleId: module.id,
  selector: 'uni-icon',
  exportAs: 'uniIcon',
  template: ``,
  styleUrls: ['./icon.component.scss'],
  host: { class: 'uni-icon' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniIconComponent implements OnInit {
  @Input()
  get icon() { return this._icon; }
  set icon(v: string) {
    if (v !== this._icon) {
      if (v && this._el.nativeElement.classList.contains(this._icon)) {
        this._el.nativeElement.classList.remove(this._icon);
      }

      this._icon = v;
      this._el.nativeElement.classList.add(v);
    }
  }
  private _icon: string;

  constructor(
    private readonly _el: ElementRef<HTMLElement>,
    private readonly _iconService: UniIconService,
  ) { }

  ngOnInit() {
    this._el.nativeElement.classList.add(this._iconService.prefix);
  }
}
