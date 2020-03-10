import { NgZone } from '@angular/core';
import Mousetrap from 'mousetrap';

import { UniInit } from '../core/classes';

import { IUniHotkey } from './hotkey.interface';

export class UniHotkeyService {
  private static _instance: UniHotkeyService;
  static get instance() {
    if (!this._instance) {
      this._instance = new UniHotkeyService();
    }

    return this._instance;
  }

  get hotkeys() { return this._hotkeys; }
  private readonly _hotkeys: { [keys: string]: IUniHotkey } = { };

  get combinations() { return Object.keys(this._hotkeys); }
  get entities() { return Object.values(this._hotkeys); }

  private readonly _mousetrap = Mousetrap(document as never as Element);

  private constructor() {
    this._mousetrap.stopCallback = (..._: any) => {
      return false;
    };
  }

  register(
    comb: string,
    description: string,
    cb: () => void,
    zone: NgZone,
    ctx: string,
  ) {
    this._hotkeys[comb] = {
      comb,
      keys: comb.split('+'),
      description,
      ctx,
      cb,
    };

    this._mousetrap.bind(comb, () => {
      if (!this._hotkeys[comb].disabled) {
        zone.run(() => cb());
      }
    });
  }

  deregister(keys: string) {
    this._hotkeys[keys] = undefined;
    delete this._hotkeys[keys];
    this._mousetrap.unbind(keys);
  }

  pause(target: Partial<UniInit>) {
    const ctx = target.constructor.name;

    for (const comb of this.combinations) {
      if (ctx === this._hotkeys[comb].ctx) {
        this._hotkeys[comb].disabled = true;
      }
    }
  }

  unpause(target: Partial<UniInit>) {
    const ctx = target.constructor.name;

    for (const comb of this.combinations) {
      if (ctx === this._hotkeys[comb].ctx) {
        this._hotkeys[comb].disabled = false;
      }
    }
  }

  pauseOthers(target: Partial<UniInit>) {
    const ctx = target.constructor.name;

    for (const comb of this.combinations) {
      if (ctx !== this._hotkeys[comb].ctx) {
        this._hotkeys[comb].disabled = true;
      }
    }
  }

  unpauseOthers(target: Partial<UniInit>) {
    const ctx = target.constructor.name;

    for (const comb of this.combinations) {
      if (ctx !== this._hotkeys[comb].ctx) {
        this._hotkeys[comb].disabled = false;
      }
    }
  }
}
