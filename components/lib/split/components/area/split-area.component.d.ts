import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UniSplitAreaComponent {
    private readonly _cdr;
    private readonly _el;
    get flex(): string;
    set flex(v: string);
    private _flex;
    get index(): number;
    set index(v: number);
    private _index?;
    flexChange: EventEmitter<string>;
    get clientWidth(): number;
    get clientHeight(): number;
    constructor(_cdr: ChangeDetectorRef, _el: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDef<UniSplitAreaComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniSplitAreaComponent, "uni-split-area", ["uniSplitArea"], { "flex": "flex"; "index": "index"; }, { "flexChange": "flexChange"; }, never>;
}
