import { Component, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';

import { UNI_HOST_COLORS } from '../core/constants';
import { UniColor } from '../core/enums';

const UNI_BUTTON_HOST_ATTRIBUTES = [
  'uni-button',
  'uni-link-button',
  'uni-icon-button',
  'uni-fab',
  'uni-mini-fab',
];

@Component({
  moduleId: module.id,
  selector: `button[uni-button], button[uni-icon-button],
             button[uni-fab], button[uni-mini-fab],
             button[uni-link-button]`,
  exportAs: 'uniButton',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
  host: { ...UNI_HOST_COLORS },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniButtonComponent {
  @Input() color?: UniColor;

  private get _element() {
    return this._el.nativeElement;
  }

  constructor(private readonly _el: ElementRef<HTMLElement>) {
    for (const attr of UNI_BUTTON_HOST_ATTRIBUTES) {
      if (this._element.hasAttribute(attr)) {
        this._element.classList.add(attr);
      }
    }
  }
}
