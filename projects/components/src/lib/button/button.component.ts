import { Component, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';

import { uniColorMixin } from '../core/color/color.mixin';
import { UniColor } from '../core/color/color.enum';

const UNI_BUTTON_HOST_ATTRIBUTES = [
  'uni-button',
  'uni-link-button',
  'uni-icon-button',
  'uni-fab',
  'uni-mini-fab',
];

class UniButtonBase { }
const _UniButtonMixinBase = uniColorMixin(UniButtonBase);

@Component({
  moduleId: module.id,
  exportAs: 'uniButton',
  selector: `button[uni-button], button[uni-icon-button],
             button[uni-fab], button[uni-mini-fab],
             button[uni-link-button]`,
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.primary]': 'color === "primary"',
    '[class.success]': 'color === "success"',
    '[class.warning]': 'color === "warning"',
    '[class.danger]': 'color === "danger"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniButtonComponent extends _UniButtonMixinBase {
  @Input() color?: UniColor;

  private get _element() {
    return this._el.nativeElement;
  }

  constructor(private readonly _el: ElementRef<HTMLElement>) {
    super();

    for (const attr of UNI_BUTTON_HOST_ATTRIBUTES) {
      if (this._element.hasAttribute(attr)) {
        this._element.classList.add(attr);
      }
    }
  }
}
