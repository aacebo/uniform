import { ElementRef, QueryList } from '@angular/core';
import { UniSubscriptionHelper } from '../../../core/helpers';
import { UniSplitAreaComponent } from '../area/split-area.component';
import { UniSplitHandleComponent } from '../handle/split-handle.component';
import * as i0 from "@angular/core";
export declare class UniSplitComponent extends UniSubscriptionHelper {
    private readonly _el;
    get areas(): QueryList<UniSplitAreaComponent>;
    set areas(v: QueryList<UniSplitAreaComponent>);
    private _areas;
    get handle(): UniSplitHandleComponent;
    set handle(v: UniSplitHandleComponent);
    private _handle;
    private get _name();
    private get _vertical();
    constructor(_el: ElementRef<HTMLElement>);
    private _onResize;
    static ɵfac: i0.ɵɵFactoryDef<UniSplitComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniSplitComponent, "uni-vertical-split, uni-horizontal-split", ["uniSplit"], {}, {}, ["handle", "areas"]>;
}
