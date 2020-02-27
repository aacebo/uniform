import { OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * This is being used to fix issue when running --aot, where
 * lifecycle hooks are only called if they are explicitly declared.
 */
export declare class UniInitHelper implements OnInit, OnDestroy {
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniInitHelper>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<UniInitHelper, never, never, {}, {}, never>;
}
