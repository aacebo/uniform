import { OverlayRef } from '@angular/cdk/overlay';
export declare class UniDialogRef {
    private readonly _overlayRef;
    private readonly _disableClose;
    private readonly _closed$;
    get closed$(): import("rxjs").Observable<void>;
    constructor(_overlayRef: OverlayRef, _disableClose: boolean);
    dismiss(): void;
}
