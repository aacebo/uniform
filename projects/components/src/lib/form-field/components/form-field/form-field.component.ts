import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ChangeDetectorRef, ContentChild, EventEmitter } from '@angular/core';

import { UniColor } from '../../../core/color/color.enum';
import { uniColorMixin } from '../../../core/color/color.mixin';

import { UniLabelComponent } from '../label/label.component';
import { UniErrorComponent } from '../error/error.component';
import { UniSuffixDirective } from '../../directives/suffix/suffix.directive';
import { UniPrefixDirective } from '../../directives/prefix/prefix.directive';

class UniFormFieldBase { }
const _UniFormFieldMixinBase = uniColorMixin(UniFormFieldBase);

@Component({
  moduleId: module.id,
  selector: 'uni-form-field',
  exportAs: 'uniFormField',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    class: 'uni-form-field',
    '[class.focused]': 'focused',
    '[class.has-value]': 'hasValue',
    '[class.has-label]': '!!label',
    '[class.has-error]': '!!error',
    '[class.has-prefix]': '!!prefix',
    '[class.has-suffix]': '!!suffix',
    '[class.disabled]': 'disabled',
    '[class.primary]': 'color === "primary"',
    '[class.success]': 'color === "success"',
    '[class.warning]': 'color === "warning"',
    '[class.danger]': 'color === "danger"',
    '(click)': 'clicked.emit($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldComponent extends _UniFormFieldMixinBase {
  @Input() color = UniColor.Primary;

  @ContentChild(UniLabelComponent)
  get label() { return this._label; }
  set label(v: UniLabelComponent) {
    if (v !== this._label) {
      this._label = v;

      if (this._label) {
        this._label.for = this._id;
      }
    }
  }
  private _label?: UniLabelComponent;

  @ContentChild(UniErrorComponent)
  get error() { return this._error; }
  set error(v: UniErrorComponent) {
    if (v !== this._error) {
      this._error = v;
    }
  }
  private _error?: UniErrorComponent;

  @ContentChild(UniPrefixDirective)
  get prefix() { return this._prefix; }
  set prefix(v: UniPrefixDirective) {
    if (v !== this._prefix) {
      this._prefix = v;
    }
  }
  private _prefix?: UniPrefixDirective;

  @ContentChild(UniSuffixDirective)
  get suffix() { return this._suffix; }
  set suffix(v: UniSuffixDirective) {
    if (v !== this._suffix) {
      this._suffix = v;
    }
  }
  private _suffix?: UniSuffixDirective;

  get id() { return this._id; }
  set id(v: string) {
    if (v !== this._id) {
      this._id = v;

      if (this._label) {
        this._label.for = this._id;
      }

      this.cdr.markForCheck();
    }
  }
  private _id?: string;

  get focused() { return this._focused; }
  set focused(v: boolean) {
    if (v !== this._focused) {
      this._focused = v;
      this.cdr.markForCheck();
    }
  }
  private _focused?: boolean;

  get hasValue() { return this._hasValue; }
  set hasValue(v: boolean) {
    if (v !== this._hasValue) {
      this._hasValue = v;
      this.cdr.markForCheck();
    }
  }
  private _hasValue?: boolean;

  get disabled() { return this._disabled; }
  set disabled(v: boolean) {
    if (v !== this._disabled) {
      this._disabled = v;
      this.cdr.markForCheck();
    }
  }
  private _disabled?: boolean;

  readonly clicked = new EventEmitter<Event>();

  constructor(readonly cdr: ChangeDetectorRef) { super(); }
}
