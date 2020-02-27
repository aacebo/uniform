import { ModuleWithProviders } from '@angular/core';
import { IUniToastConfig } from './toast-config.interface';
import * as i0 from "@angular/core";
import * as i1 from "./toast.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/overlay";
export declare class UniToastModule {
    static forRoot(config: IUniToastConfig): ModuleWithProviders<UniToastModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<UniToastModule, [typeof i1.UniToastComponent], [typeof i2.CommonModule, typeof i3.OverlayModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<UniToastModule>;
}
