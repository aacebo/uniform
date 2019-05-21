import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';

const UNI_BUTTON_HOST_ATTRIBUTES = [
  'uni-button',
  'uni-outline-button',
  'uni-icon-button',
  'uni-fab',
  'uni-mini-fab'
];

@Component({
  // tslint:disable-next-line: component-selector
  selector: `button[uni-button], button[uni-outline-button], button[uni-icon-button],
             button[uni-fab], button[uni-mini-fab]`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniButtonComponent {
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
