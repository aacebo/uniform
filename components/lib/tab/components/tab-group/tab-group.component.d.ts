import { QueryList, AfterContentInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { UniTabComponent } from '../tab/tab.component';
import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import * as i0 from "@angular/core";
export declare class UniTabGroupComponent implements AfterContentInit {
    private readonly _cdr;
    get active(): number;
    set active(v: number);
    private _active;
    activeChange: EventEmitter<number>;
    readonly tabs: QueryList<UniTabComponent>;
    get labels(): QueryList<UniTabLabelComponent>;
    set labels(v: QueryList<UniTabLabelComponent>);
    private _labels;
    get transform(): string;
    get activeLabel(): UniTabLabelComponent;
    constructor(_cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    select(index: number): void;
    private _setActive;
    static ɵfac: i0.ɵɵFactoryDef<UniTabGroupComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniTabGroupComponent, "uni-tab-group", ["uniTabGroup"], { "active": "active"; }, { "activeChange": "activeChange"; }, ["tabs"]>;
}
