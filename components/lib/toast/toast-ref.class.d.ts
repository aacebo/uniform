import { OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
export declare class UniToastRef {
    private readonly _overlayRef;
    private readonly _closed$;
    get closed$(): import("rxjs").Observable<void>;
    get config(): import("@angular/cdk/overlay").OverlayConfig;
    get position(): DOMRect;
    constructor(_overlayRef: OverlayRef);
    dismiss(): void;
    updatePosition(strategy: PositionStrategy): void;
}
