import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { IUniOptionSelectedEvent } from '../../interfaces/option-selected-event.interface';

@Component({
  moduleId: module.id,
  selector: 'uni-option',
  exportAs: 'uniOption',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  host: {
    class: 'uni-option',
    '[class.disabled]': 'disabled',
    '(click)': 'selected ? deselect() : select()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniOptionComponent {
  @Input() value?: any;
  @Input() disabled = false;
  @Input() selected = false;

  @Output() selectionChanged = new EventEmitter<IUniOptionSelectedEvent>();

  get content() {
    return this._el.nativeElement.textContent;
  }

  constructor(private readonly _el: ElementRef<HTMLElement>) {}

  select() {
    if (!this.disabled) {
      this.selected = true;
      this.emitChanged();
    }
  }

  deselect() {
    if (!this.disabled) {
      this.selected = false;
      this.emitChanged();
    }
  }

  private emitChanged() {
    this.selectionChanged.emit({ source: this });
  }
}
