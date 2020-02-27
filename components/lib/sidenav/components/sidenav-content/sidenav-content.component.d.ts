import { ElementRef, AfterContentInit } from '@angular/core';
import { UniSidenavContainerComponent } from '../sidenav-container/sidenav-container.component';
import * as i0 from "@angular/core";
export declare class UniSidenavContentComponent implements AfterContentInit {
    private readonly _container;
    private readonly _el;
    get marginLeft(): number;
    get marginRight(): number;
    private get _open();
    private get _mode();
    private get _position();
    private get _width();
    constructor(_container: UniSidenavContainerComponent, _el: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniSidenavContentComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniSidenavContentComponent, "uni-sidenav-content", ["uniSidenavContent"], {}, {}, never>;
}
