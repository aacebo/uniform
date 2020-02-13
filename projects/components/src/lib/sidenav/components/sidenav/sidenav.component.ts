import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewEncapsulation,
  AfterContentChecked,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import { UNI_SIDENAV_ANIMATIONS } from '../../sidenav.animations';

@Component({
  moduleId: module.id,
  selector: 'uni-sidenav',
  exportAs: 'uniSidenav',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    UNI_SIDENAV_ANIMATIONS.slideTransition,
  ],
  host: {
    class: 'uni-sidenav',
    '[class.over]': 'mode === UniSidenavMode.Over',
    '[class.end]': 'position === UniSidenavPosition.End',
    '[class.closed]': 'open === false',
    '[@slideTransition]': 'slide',
    '(@slideTransition.done)': 'onSlideEnd()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSidenavComponent implements AfterContentChecked {
  @Input()
  get position() { return this._position; }
  set position(v: UniSidenavPosition) {
    if (v !== this._position) {
      this._position = v;
      this.positionChange.emit(this._position);
      this.cdr.markForCheck();
    }
  }
  private _position = UniSidenavPosition.Start;

  @Input()
  get mode() { return this._mode; }
  set mode(v: UniSidenavMode) {
    if (v !== this._mode) {
      this._mode = v;
      this.modeChange.emit(this._mode);
      this.cdr.markForCheck();
    }
  }
  private _mode = UniSidenavMode.Side;

  @Input()
  get open() { return this._open; }
  set open(v: boolean) {
    if (v !== this._open) {
      this._open = coerceBooleanProperty(v);
      this.openChange.emit(this._open);
      this.cdr.markForCheck();
    }
  }
  private _open?: boolean;

  @Input()
  get closeOnBackdropClick() { return this._closeOnBackdropClick; }
  set closeOnBackdropClick(v: boolean) {
    if (v !== this._closeOnBackdropClick) {
      this._closeOnBackdropClick = coerceBooleanProperty(v);
      this.cdr.markForCheck();
    }
  }
  private _closeOnBackdropClick = true;

  @Input()
  get hasBackdrop() { return this._hasBackdrop; }
  set hasBackdrop(v: boolean) {
    if (v !== this._hasBackdrop) {
      this._hasBackdrop = coerceBooleanProperty(v);
      this.cdr.markForCheck();
    }
  }
  private _hasBackdrop = true;

  @Output() openChange = new EventEmitter<boolean>();
  @Output() modeChange = new EventEmitter<UniSidenavMode>();
  @Output() positionChange = new EventEmitter<UniSidenavPosition>();

  get slide() {
    return {
      value: this.open,
      params: {
        distance: this.position === UniSidenavPosition.Start ? '-100' : '100',
      },
    };
  }

  readonly UniSidenavPosition = UniSidenavPosition;
  readonly UniSidenavMode = UniSidenavMode;

  constructor(
    readonly el: ElementRef<HTMLElement>,
    readonly cdr: ChangeDetectorRef,
  ) { }

  ngAfterContentChecked() {
    setTimeout(() => this.cdr.markForCheck());
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.mode === UniSidenavMode.Over) {
      this.open = false;
    }
  }

  onSlideEnd() {
    console.log('end');
  }
}
