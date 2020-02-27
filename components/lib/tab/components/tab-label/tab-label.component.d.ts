import { ChangeDetectorRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UniTabLabelComponent {
    private readonly _cdr;
    private readonly _el;
    get active(): boolean;
    set active(v: boolean);
    private _active;
    get disabled(): boolean;
    set disabled(v: boolean);
    private _disabled;
    get width(): number;
    constructor(_cdr: ChangeDetectorRef, _el: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDef<UniTabLabelComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniTabLabelComponent, "uni-tab-label", ["uniTabLabel"], { "active": "active"; "disabled": "disabled"; }, {}, never>;
}
