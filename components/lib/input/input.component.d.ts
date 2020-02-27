import { OnInit, AfterViewInit } from '@angular/core';
import { UniFormFieldControlBase } from '../form-field/form-field-control.base';
import * as i0 from "@angular/core";
export declare class UniInputComponent extends UniFormFieldControlBase<string> implements OnInit, AfterViewInit {
    get autoResize(): boolean;
    set autoResize(v: boolean);
    private _autoResize?;
    private get _height();
    private get _element();
    private get _isTextArea();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onFocus(e: boolean): void;
    onInput(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniInputComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniInputComponent, "input[uniInput], textarea[uniInput]", ["uniInput"], { "autoResize": "autoResize"; }, {}, never>;
}
