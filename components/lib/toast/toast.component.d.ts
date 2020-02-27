import { OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUniToastOptions } from './toast-options.interface';
import { IUniToastConfig } from './toast-config.interface';
import { UniToastRef } from './toast-ref.class';
import * as i0 from "@angular/core";
export declare class UniToastComponent implements OnInit, OnDestroy {
    readonly config: IUniToastConfig;
    readonly options: IUniToastOptions;
    private readonly _toastRef;
    readonly progress$: BehaviorSubject<number>;
    private _interval;
    private _timeout;
    private readonly _ticks;
    private readonly _total;
    private get _tick();
    constructor(config: IUniToastConfig, options: IUniToastOptions, _toastRef: UniToastRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniToastComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniToastComponent, "uni-toast", ["uniToast"], {}, {}, never>;
}
