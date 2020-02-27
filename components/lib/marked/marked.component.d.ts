import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class UniMarkedComponent {
    private readonly _cdr;
    private readonly _sanitizer;
    private readonly _el;
    get markdown(): string;
    set markdown(v: string);
    private _markdown;
    get highlight(): boolean;
    set highlight(v: boolean);
    private _highlight?;
    get sanitize(): boolean;
    set sanitize(v: boolean);
    private _sanitize?;
    get html(): string;
    set html(v: string);
    private _html?;
    private _options;
    constructor(_cdr: ChangeDetectorRef, _sanitizer: DomSanitizer, _el: ElementRef<HTMLElement>);
    private _highlightCodeBlock;
    static ɵfac: i0.ɵɵFactoryDef<UniMarkedComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniMarkedComponent, "uni-marked", ["uniMarked"], { "markdown": "markdown"; "highlight": "highlight"; "sanitize": "sanitize"; }, {}, never>;
}
