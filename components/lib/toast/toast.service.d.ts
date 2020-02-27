import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { IUniToast } from './toast.interface';
import { IUniToastOptions } from './toast-options.interface';
import { IUniToastConfig } from './toast-config.interface';
import { UniToastComponent } from './toast.component';
import * as i0 from "@angular/core";
export declare class UniToastService {
    private readonly _config;
    private readonly _overlay;
    private _index;
    private readonly _toasts;
    private get _id();
    constructor(_config: IUniToastConfig, _overlay: Overlay);
    open(options: IUniToastOptions): IUniToast<UniToastComponent>;
    create<T>(component: ComponentType<T>, options: IUniToastOptions): IUniToast<T>;
    remove(id: number): number;
    find<T = any>(id: number): IUniToast<T>;
    private _create;
    private _getInjector;
    private _getPositionStrategy;
    private _getLatestMargin;
    private _getToastsByPosition;
    private _getLatestByPosition;
    private _updatePositions;
    static ɵfac: i0.ɵɵFactoryDef<UniToastService>;
    static ɵprov: i0.ɵɵInjectableDef<UniToastService>;
}
