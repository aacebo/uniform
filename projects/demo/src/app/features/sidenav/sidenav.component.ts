import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniHotkeyService } from '@uniform/components';

import { ISidenavItem } from './sidenav-item.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  @Input() items: ISidenavItem[] = [];
  @Input()
  get open() { return this._open; }
  set open(v: boolean) {
    this._open = coerceBooleanProperty(v);
    this.openChange.emit(this._open);
  }
  private _open = false;

  @Output() backdropClicked = new EventEmitter<void>();
  @Output() openChange = new EventEmitter<boolean>();

  constructor(private readonly _hotkeyService: UniHotkeyService) { }

  ngOnInit() {
    this._hotkeyService.add('alt+m', 'Toggle Menu', () => {
      this.open = !this.open;
    });
  }

  onOpenChange(e: boolean) {
    if (!e) {
      this.backdropClicked.emit();
    }
  }
}
