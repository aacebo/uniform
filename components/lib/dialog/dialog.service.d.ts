import { ComponentFactoryResolver } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { IUniDialog } from './dialog.interface';
import { IUniDialogOptions } from './dialog-options.interface';
import * as i0 from "@angular/core";
export declare class UniDialogService {
    private readonly _overlay;
    private readonly _resolver;
    private _index;
    private readonly _dialogs;
    private get _id();
    constructor(_overlay: Overlay, _resolver: ComponentFactoryResolver);
    find(id: number): IUniDialog;
    remove(id: number): number;
    open<T = any>(content: T, options?: IUniDialogOptions): IUniDialog;
    private _getInjector;
    private _getPositionStrategy;
    static ɵfac: i0.ɵɵFactoryDef<UniDialogService>;
    static ɵprov: i0.ɵɵInjectableDef<UniDialogService>;
}
