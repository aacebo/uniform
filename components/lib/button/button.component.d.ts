import { ElementRef } from '@angular/core';
import { UniColor } from '../core/enums';
import * as i0 from "@angular/core";
export declare class UniButtonComponent {
    private readonly _el;
    color?: UniColor;
    private get _element();
    constructor(_el: ElementRef<HTMLElement>);
    static ɵfac: i0.ɵɵFactoryDef<UniButtonComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniButtonComponent, "button[uni-button], button[uni-icon-button],             button[uni-fab], button[uni-mini-fab],             button[uni-link-button]", ["uniButton"], { "color": "color"; }, {}, never>;
}
