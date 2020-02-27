import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class UniSubscriptionHelper implements OnDestroy {
    readonly destroy$: Subject<void>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniSubscriptionHelper>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<UniSubscriptionHelper, never, never, {}, {}, never>;
}
