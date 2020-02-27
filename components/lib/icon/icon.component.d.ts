import { ElementRef, OnInit } from '@angular/core';
import { UniIconService } from './icon.service';
import * as i0 from "@angular/core";
export declare class UniIconComponent implements OnInit {
    private readonly _el;
    private readonly _iconService;
    get icon(): string;
    set icon(v: string);
    private _icon;
    constructor(_el: ElementRef<HTMLElement>, _iconService: UniIconService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniIconComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniIconComponent, "uni-icon", ["uniIcon"], { "icon": "icon"; }, {}, never>;
}
