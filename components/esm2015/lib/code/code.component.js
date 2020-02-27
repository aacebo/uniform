import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ChangeDetectorRef, } from '@angular/core';
import hljs from 'highlight.js';
import * as i0 from "@angular/core";
export class UniCodeComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
    }
    get code() { return this._code; }
    set code(v) {
        this._code = v;
        this.html = this._language ? hljs.highlight(this._language, v).value : hljs.highlightAuto(v).value;
    }
    get language() { return this._language; }
    set language(v) {
        this._language = v;
    }
    get html() { return this._html; }
    set html(v) {
        this._html = v;
        this._cdr.markForCheck();
    }
}
UniCodeComponent.ɵfac = function UniCodeComponent_Factory(t) { return new (t || UniCodeComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
UniCodeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniCodeComponent, selectors: [["uni-code"]], hostAttrs: [1, "uni-code"], inputs: { code: "code", language: "language" }, exportAs: ["uniCode"], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function UniCodeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pre", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("innerHTML", ctx.html, i0.ɵɵsanitizeHtml);
    } }, styles: [".uni-code{display:block;background-color:var(--darkest);color:var(--white);padding:10px;border-radius:3px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-code pre{margin:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniCodeComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-code',
                exportAs: 'uniCode',
                template: `<pre [innerHTML]="html"></pre>`,
                styleUrls: ['./code.component.scss'],
                host: { class: 'uni-code' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { code: [{
            type: Input
        }], language: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvZGUvY29kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxJQUFJLE1BQU0sY0FBYyxDQUFDOztBQVloQyxNQUFNLE9BQU8sZ0JBQWdCO0lBdUIzQixZQUNtQixJQUF1QjtRQUF2QixTQUFJLEdBQUosSUFBSSxDQUFtQjtJQUN0QyxDQUFDO0lBeEJMLElBQ0ksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakMsSUFBSSxJQUFJLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckcsQ0FBQztJQUdELElBQ0ksUUFBUSxLQUFLLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxRQUFRLENBQUMsQ0FBUztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBR0QsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksQ0FBQyxDQUFTO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnRkFwQlUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7UUFOaEIseUJBQThCOztRQUF6Qix1REFBa0I7O2tEQU12QixnQkFBZ0I7Y0FWNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFRTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktY29kZScsXG4gIGV4cG9ydEFzOiAndW5pQ29kZScsXG4gIHRlbXBsYXRlOiBgPHByZSBbaW5uZXJIVE1MXT1cImh0bWxcIj48L3ByZT5gLFxuICBzdHlsZVVybHM6IFsnLi9jb2RlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICd1bmktY29kZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaUNvZGVDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBnZXQgY29kZSgpIHsgcmV0dXJuIHRoaXMuX2NvZGU7IH1cbiAgc2V0IGNvZGUodjogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29kZSA9IHY7XG4gICAgdGhpcy5odG1sID0gdGhpcy5fbGFuZ3VhZ2UgPyBobGpzLmhpZ2hsaWdodCh0aGlzLl9sYW5ndWFnZSwgdikudmFsdWUgOiBobGpzLmhpZ2hsaWdodEF1dG8odikudmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfY29kZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsYW5ndWFnZSgpIHsgcmV0dXJuIHRoaXMuX2xhbmd1YWdlOyB9XG4gIHNldCBsYW5ndWFnZSh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYW5ndWFnZSA9IHY7XG4gIH1cbiAgcHJpdmF0ZSBfbGFuZ3VhZ2U/OiBzdHJpbmc7XG5cbiAgZ2V0IGh0bWwoKSB7IHJldHVybiB0aGlzLl9odG1sOyB9XG4gIHNldCBodG1sKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2h0bWwgPSB2O1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF9odG1sPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkgeyB9XG59XG4iXX0=