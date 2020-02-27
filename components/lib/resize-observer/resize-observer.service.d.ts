import ResizeObserver from 'resize-observer-polyfill';
import * as i0 from "@angular/core";
export declare class UniResizeObserverService {
    private _timer;
    observe(el: HTMLElement, cb: (e: Partial<DOMRectReadOnly>) => void, throttle?: number): ResizeObserver;
    static ɵfac: i0.ɵɵFactoryDef<UniResizeObserverService>;
    static ɵprov: i0.ɵɵInjectableDef<UniResizeObserverService>;
}
