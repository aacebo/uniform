import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';

import { UniColor } from '../color/color.enum';
import { uniColorMixin } from '../color/color.mixin';

import { IUniOptionSelectedEvent } from './option-selected-event.interface';

class UniOptionBase { }
const _UniOptionMixinBase = uniColorMixin(UniOptionBase);

@Component({
  moduleId: module.id,
  selector: 'uni-option',
  exportAs: 'uniOption',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./option.component.scss'],
  host: {
    class: 'uni-option',
    '[class.disabled]': 'disabled',
    '[class.selected]': 'selected',
    '(click)': 'select()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniOptionComponent extends _UniOptionMixinBase {
  @Input() value?: any;
  @Input() color?: UniColor;
  @Input() disabled = false;
  @Input() selected = false;

  @Output() selectionChanged = new EventEmitter<IUniOptionSelectedEvent>();

  get content() {
    return this._el.nativeElement.textContent.trim();
  }

  constructor(private readonly _el: ElementRef<HTMLElement>) { super(); }

  select() {
    if (!this.disabled && !this.selected) {
      this.selected = true;
      this._emitChanged();
    }
  }

  deselect() {
    if (!this.disabled && this.selected) {
      this.selected = false;
      this._emitChanged();
    }
  }

  private _emitChanged() {
    this.selectionChanged.emit({ source: this });
  }
}
