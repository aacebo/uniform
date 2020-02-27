import { ChangeDetectorRef } from '@angular/core';
import { UniColor } from '../../../core/enums';
import { UniProgressMode } from '../../enums/progress-mode.enum';
import { IUniProgress } from '../../progress.interface';
import * as i0 from "@angular/core";
export declare class UniProgressBarComponent implements IUniProgress {
    private readonly _cdr;
    mode: UniProgressMode;
    color: UniColor;
    get total(): number;
    set total(v: number);
    private _total;
    get value(): number;
    set value(v: number);
    private _value;
    get percentage(): number;
    readonly UniProgressMode: typeof UniProgressMode;
    private readonly _indeterminate;
    constructor(_cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<UniProgressBarComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniProgressBarComponent, "uni-progress-bar", ["uniProgresssBar"], { "mode": "mode"; "color": "color"; "total": "total"; "value": "value"; }, {}, never>;
}
