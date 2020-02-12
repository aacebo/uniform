import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeExampleComponent {
  @Input() title: string;
  @Input() html: string;

  @Input()
  get code() { return this._code; }
  set code(v: boolean) {
    this._code = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _code?: boolean;

  constructor(private readonly _cdr: ChangeDetectorRef) { }
}
