import { Injectable, NgZone } from '@angular/core';
import Mousetrap from 'mousetrap';

import { IUniHotkey } from './hotkey.interface';

const mousetrap = Mousetrap;

@Injectable()
export class UniHotkeyService {
  get hotkeys() { return this._hotkeys; }
  private readonly _hotkeys: { [keys: string]: IUniHotkey } = { };

  get combinations() { return Object.keys(this._hotkeys); }
  get entities() { return Object.values(this._hotkeys); }

  private readonly _mousetrap = mousetrap(document as never as Element);

  constructor(private readonly _zone: NgZone) {
    this._mousetrap.stopCallback = (..._: any) => {
      return false;
    };
  }

  add(
    comb: string,
    description: string,
    cb: (hotkey: IUniHotkey) => void,
  ) {
    this._hotkeys[comb] = {
      comb,
      keys: comb.split('+'),
      description,
      cb,
    };

    this._mousetrap.bind(comb, e => {
      if (!this._hotkeys[comb].disabled) {
        e.preventDefault();
        this._zone.run(() => cb(this._hotkeys[comb]));
      }
    });
  }

  remove(comb: string) {
    this._hotkeys[comb] = undefined;
    delete this._hotkeys[comb];
    this._mousetrap.unbind(comb);
  }

  disable(comb: string) {
    this._hotkeys[comb].disabled = true;
  }

  enable(comb: string) {
    this._hotkeys[comb].disabled = false;
  }
}
