import { OnInit, ElementRef, TemplateRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { UniPosition } from '../core/position';
import { UniPopoverTrigger } from './popover-trigger.enum';
import * as i0 from "@angular/core";
export declare class UniPopoverDirective implements OnInit {
    private readonly _overlay;
    private readonly _el;
    content: string | TemplateRef<any>;
    disabled: boolean;
    position: UniPosition;
    trigger: UniPopoverTrigger;
    panelClass: string;
    hasBackdrop: boolean;
    backdropClass: string;
    origin: HTMLElement;
    private _overlayRef;
    private get _vertical();
    private get _positionStrategy();
    constructor(_overlay: Overlay, _el: ElementRef);
    ngOnInit(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onClick(): void;
    private _show;
    private _hide;
    static ɵfac: i0.ɵɵFactoryDef<UniPopoverDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<UniPopoverDirective, "[uniPopover]", ["uniPopover"], { "content": "uniPopover"; "disabled": "uniPopoverDisabled"; "position": "uniPopoverPosition"; "trigger": "uniPopoverTrigger"; "panelClass": "uniPopoverPanelClass"; "hasBackdrop": "uniPopoverHasBackdrop"; "backdropClass": "uniPopoverBackdropClass"; "origin": "uniPopoverOrigin"; }, {}, never>;
}
