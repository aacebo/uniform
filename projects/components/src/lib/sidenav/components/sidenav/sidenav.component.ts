import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';

@Component({
  moduleId: module.id,
  selector: 'uni-sidenav',
  exportAs: 'uniSidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {
    class: 'uni-sidenav',
    '[class.over]': 'mode === UniSidenavMode.Over',
    '[class.end]': 'position === UniSidenavPosition.End',
    '[class.closed]': 'open === false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniSidenavComponent {
  @Input() position = UniSidenavPosition.Start;
  @Input() mode = UniSidenavMode.Side;

  @Input()
  get open() { return this._open; }
  set open(v: boolean) {
    this._open = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _open = true;

  @Output() closed = new EventEmitter<void>();

  readonly UniSidenavPosition = UniSidenavPosition;
  readonly UniSidenavMode = UniSidenavMode;

  constructor(
    readonly el: ElementRef<HTMLElement>,
    private readonly _cdr: ChangeDetectorRef,
  ) { }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.mode === UniSidenavMode.Over) {
      this.open = false;
      this.closed.emit();
    }
  }
}
