import * as i0 from "@angular/core";
/**
 * This is being used to fix issue when running --aot, where
 * lifecycle hooks are only called if they are explicitly declared.
 */
var UniInitHelper = /** @class */ (function () {
    function UniInitHelper() {
    }
    UniInitHelper.prototype.ngOnInit = function () { };
    UniInitHelper.prototype.ngOnDestroy = function () { };
    UniInitHelper.ɵfac = function UniInitHelper_Factory(t) { return new (t || UniInitHelper)(); };
    UniInitHelper.ɵdir = i0.ɵɵdefineDirective({ type: UniInitHelper });
    return UniInitHelper;
}());
export { UniInitHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaGVscGVycy9pbml0LmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7OztHQUdHO0FBQ0g7SUFBQTtLQUdDO0lBRkMsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFDZCxtQ0FBVyxHQUFYLGNBQWdCLENBQUM7OEVBRk4sYUFBYTtzREFBYixhQUFhO3dCQU4xQjtDQVNDLEFBSEQsSUFHQztTQUhZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgaXMgYmVpbmcgdXNlZCB0byBmaXggaXNzdWUgd2hlbiBydW5uaW5nIC0tYW90LCB3aGVyZVxuICogbGlmZWN5Y2xlIGhvb2tzIGFyZSBvbmx5IGNhbGxlZCBpZiB0aGV5IGFyZSBleHBsaWNpdGx5IGRlY2xhcmVkLlxuICovXG5leHBvcnQgY2xhc3MgVW5pSW5pdEhlbHBlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbmdPbkluaXQoKSB7IH1cbiAgbmdPbkRlc3Ryb3koKSB7IH1cbn1cbiJdfQ==