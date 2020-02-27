import { EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { UniResizeObserverService } from './resize-observer.service';
import * as i0 from "@angular/core";
export declare class UniResizeObserverDirective implements OnInit, OnDestroy {
    private readonly _el;
    private readonly _resizeObserverService;
    resize: EventEmitter<Partial<DOMRectReadOnly>>;
    private _observer;
    constructor(_el: ElementRef<HTMLElement>, _resizeObserverService: UniResizeObserverService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniResizeObserverDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<UniResizeObserverDirective, "[uniResizeObserver]", ["uniResizeObserver"], {}, { "resize": "uniResizeObserver"; }, never>;
}
