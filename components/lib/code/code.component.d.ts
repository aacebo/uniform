import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UniCodeComponent {
    private readonly _cdr;
    get code(): string;
    set code(v: string);
    private _code;
    get language(): string;
    set language(v: string);
    private _language?;
    get html(): string;
    set html(v: string);
    private _html?;
    constructor(_cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<UniCodeComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniCodeComponent, "uni-code", ["uniCode"], { "code": "code"; "language": "language"; }, {}, never>;
}
