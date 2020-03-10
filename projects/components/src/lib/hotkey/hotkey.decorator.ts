import { NgZone } from '@angular/core';

import { UniInit } from '../core/classes';

import { UniHotkeyService } from './hotkey.service';

export function UniHotkey(comb: string, description: string) {
  return (target: Partial<UniInit>, name: string) => {
    const ngOnInit = target.ngOnInit;
    const ngOnDestroy = target.ngOnDestroy;
    let cnt = 0;

    target.ngOnInit = function() {
      cnt++;

      if (ngOnInit) {
        ngOnInit.bind(this)();
      }

      if (!UniHotkeyService.instance.hotkeys[comb]) {
        UniHotkeyService.instance.register(
          comb,
          description,
          target[name].bind(this),
          new NgZone({ enableLongStackTrace: false }),
          target.constructor.name,
        );
      }
    };

    target.ngOnDestroy = function() {
      cnt--;

      if (ngOnDestroy) {
        ngOnDestroy.bind(this)();
      }

      if (cnt === 0) {
        UniHotkeyService.instance.deregister(comb);
      }
    };
  };
}
