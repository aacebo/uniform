import { Component, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';

import { UNI_HOST_COLORS } from '../core/constants/colors.constant';
import { UniColor } from '../core/enums';

const UNI_BUTTON_HOST_ATTRIBUTES = [
  'uni-button',
  'uni-outline-button',
  'uni-icon-button',
  'uni-fab',
  'uni-mini-fab'
];

@Component({
  moduleId: module.id,
  // tslint:disable-next-line: component-selector
  selector: `button[uni-button], button[uni-outline-button], button[uni-icon-button],
             button[uni-fab], button[uni-mini-fab]`,
  exportAs: 'uniButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    ...UNI_HOST_COLORS
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniButtonComponent {
  @Input() color?: UniColor;

  private get element(): HTMLElement {
    return this.el.nativeElement;
  }

  constructor(private readonly el: ElementRef) {
    for (const attr of UNI_BUTTON_HOST_ATTRIBUTES) {
      if (this.element.hasAttribute(attr)) {
        this.element.classList.add(attr);
      }
    }
  }
}
