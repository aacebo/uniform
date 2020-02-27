import { ChangeDetectorRef } from '@angular/core';
import { UniTabLabelComponent } from '../tab-label/tab-label.component';
import { UniTabBodyDirective } from '../../directives/tab-body/tab-body.directive';
import * as i0 from "@angular/core";
export declare class UniTabComponent {
    private readonly _cdr;
    label?: string;
    get disabled(): boolean;
    set disabled(v: boolean);
    private _disabled;
    readonly uniLabel?: UniTabLabelComponent;
    readonly uniBody?: UniTabBodyDirective;
    get active(): boolean;
    set active(v: boolean);
    private _active;
    constructor(_cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<UniTabComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniTabComponent, "uni-tab", ["uniTab"], { "label": "label"; "disabled": "disabled"; }, {}, ["uniLabel", "uniBody"]>;
}
