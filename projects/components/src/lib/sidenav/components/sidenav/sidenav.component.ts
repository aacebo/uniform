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
  ContentChild,
  AfterContentInit,
  ViewContainerRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import { UniSidenavState } from '../../enums/sidenav-state.enum';
import { UNI_SIDENAV_ANIMATIONS } from '../../sidenav.animations';
import { UniSidenavBodyDirective } from '../../directives/sidenav-body/sidenav-body.directive';

@Component({
  moduleId: module.id,
  selector: 'uni-sidenav',
  exportAs: 'uniSidenav',
  template: `<ng-container #view></ng-container>`,
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
export class UniSidenavComponent implements AfterViewInit, AfterContentInit {
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
      this.state = this.open ? UniSidenavState.Opening : UniSidenavState.Closing;
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
  @Output() stateChange = new EventEmitter<UniSidenavState>();
  @Output() modeChange = new EventEmitter<UniSidenavMode>();
  @Output() positionChange = new EventEmitter<UniSidenavPosition>();

  @ContentChild(UniSidenavBodyDirective)
  readonly body: UniSidenavBodyDirective;

  @ViewChild('view', { read: ViewContainerRef })
  readonly view: ViewContainerRef;

  get slide() {
    return {
      value: this.open,
      params: {
        distance: this.position === UniSidenavPosition.Start ? '-100' : '100',
      },
    };
  }

  get state() { return this._state; }
  set state(v: UniSidenavState) {
    if (v !== this._state) {
      const prev = this._state;
      this._state = v;

      if (this.view) {
        if (prev === UniSidenavState.Closed && this._state === UniSidenavState.Opening) {
          this.view.createEmbeddedView(this.body.template);
        } else if (this._state === UniSidenavState.Closed) {
          this.view.remove();
        }
      }

      this.stateChange.emit(v);
      this.cdr.markForCheck();
    }
  }
  private _state?: UniSidenavState;

  readonly UniSidenavPosition = UniSidenavPosition;
  readonly UniSidenavMode = UniSidenavMode;
  readonly UniSidenavState = UniSidenavState;

  constructor(
    readonly el: ElementRef<HTMLElement>,
    readonly cdr: ChangeDetectorRef,
  ) { }

  ngAfterViewInit() {
    if (this.open) {
      this.view.createEmbeddedView(this.body.template);
    }
  }

  ngAfterContentInit() {
    setTimeout(() => this.cdr.markForCheck());
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.mode === UniSidenavMode.Over) {
      this.open = false;
    }
  }

  onSlideEnd() {
    this.state = this.open ? UniSidenavState.Opened : UniSidenavState.Closed;
  }
}
