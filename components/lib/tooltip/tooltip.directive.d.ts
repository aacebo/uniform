import { OnInit, ElementRef, TemplateRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { UniPosition } from '../core/position';
import * as i0 from "@angular/core";
export declare class UniTooltipDirective implements OnInit {
    private readonly _overlay;
    private readonly _el;
    content: string | TemplateRef<any>;
    disabled: boolean;
    position: UniPosition;
    panelClass: string;
    origin: HTMLElement;
    private _overlayRef;
    private get _vertical();
    private get _positionStrategy();
    constructor(_overlay: Overlay, _el: ElementRef);
    ngOnInit(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniTooltipDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<UniTooltipDirective, "[uniTooltip]", ["uniTooltip"], { "content": "uniTooltip"; "disabled": "uniTooltipDisabled"; "position": "uniTooltipPosition"; "panelClass": "uniTooltipPanelClass"; "origin": "uniTooltipOrigin"; }, {}, never>;
}
