import { ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UniDialogContainerComponent implements AfterViewInit {
    private readonly _content;
    private readonly _resolver;
    vc: ViewContainerRef;
    constructor(_content: any, _resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniDialogContainerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniDialogContainerComponent, "uni-dialog-container", ["uniDialogContainer"], {}, {}, never>;
}
