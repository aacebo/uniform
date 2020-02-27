import { EventEmitter, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { UniSubscriptionHelper } from '../../../core/helpers';
import { UniSidenavComponent } from '../sidenav/sidenav.component';
import * as i0 from "@angular/core";
export declare class UniSidenavContainerComponent extends UniSubscriptionHelper implements AfterContentInit {
    private readonly _cdr;
    backdropClicked: EventEmitter<void>;
    readonly sidenav: UniSidenavComponent;
    get showBackdrop(): boolean;
    get hasBackdrop(): boolean;
    constructor(_cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    onBackdropClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniSidenavContainerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniSidenavContainerComponent, "uni-sidenav-container", ["uniSidenavContainer"], {}, { "backdropClicked": "backdropClicked"; }, ["sidenav"]>;
}
