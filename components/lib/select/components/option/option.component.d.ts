import { EventEmitter, ElementRef } from '@angular/core';
import { UniColor } from '../../../core/enums';
import { IUniOptionSelectedEvent } from '../../interfaces/option-selected-event.interface';
import * as i0 from "@angular/core";
export declare class UniOptionComponent {
    private readonly _el;
    value?: any;
    color?: UniColor;
    disabled: boolean;
    selected: boolean;
    selectionChanged: EventEmitter<IUniOptionSelectedEvent>;
    get content(): string;
    constructor(_el: ElementRef<HTMLElement>);
    select(): void;
    deselect(): void;
    private _emitChanged;
    static ɵfac: i0.ɵɵFactoryDef<UniOptionComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniOptionComponent, "uni-option", ["uniOption"], { "value": "value"; "color": "color"; "disabled": "disabled"; "selected": "selected"; }, { "selectionChanged": "selectionChanged"; }, never>;
}
