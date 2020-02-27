import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, SecurityContext, ElementRef, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import marked from 'marked';
import hljs from 'highlight.js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var _c0 = ["*"];
var UniMarkedComponent = /** @class */ (function () {
    function UniMarkedComponent(_cdr, _sanitizer, _el) {
        this._cdr = _cdr;
        this._sanitizer = _sanitizer;
        this._el = _el;
        this._options = {
            silent: true,
            smartLists: true,
            gfm: true,
            breaks: true,
            highlight: null,
        };
    }
    Object.defineProperty(UniMarkedComponent.prototype, "markdown", {
        get: function () { return this._markdown; },
        set: function (v) {
            this._markdown = v;
            this.html = marked(v || '', this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniMarkedComponent.prototype, "highlight", {
        get: function () { return this._highlight; },
        set: function (v) {
            if (v !== this._highlight) {
                this._highlight = coerceBooleanProperty(v);
                this._options.highlight = this._highlight ? this._highlightCodeBlock.bind(this) : null;
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniMarkedComponent.prototype, "sanitize", {
        get: function () { return this._sanitize; },
        set: function (v) {
            if (v !== this._sanitize) {
                this._sanitize = coerceBooleanProperty(v);
                this._cdr.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniMarkedComponent.prototype, "html", {
        get: function () { return this._html; },
        set: function (v) {
            this._html = this._sanitize ? this._sanitizer.sanitize(SecurityContext.HTML, v) : v;
            this._el.nativeElement.innerHTML = this._html;
            this._cdr.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    UniMarkedComponent.prototype._highlightCodeBlock = function (code) {
        return hljs.highlightAuto(code).value;
    };
    UniMarkedComponent.ɵfac = function UniMarkedComponent_Factory(t) { return new (t || UniMarkedComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniMarkedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniMarkedComponent, selectors: [["uni-marked"]], hostAttrs: [1, "uni-marked"], inputs: { markdown: "markdown", highlight: "highlight", sanitize: "sanitize" }, exportAs: ["uniMarked"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniMarkedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".uni-marked{display:block}.uni-marked code{color:var(--blood-orange)}.uni-marked table{border-spacing:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-marked table td,.uni-marked table th{padding:10px}.uni-marked table thead tr{background-color:var(--darker)}.uni-marked table thead tr th{text-align:left;color:var(--white);font-weight:500}.uni-marked table thead tr th:first-child{border-top-left-radius:3px}.uni-marked table thead tr th:last-child{border-top-right-radius:3px}.uni-marked table tbody tr{background-color:var(--dark)}.uni-marked table tbody tr:last-child td:first-child{border-bottom-left-radius:3px}.uni-marked table tbody tr:last-child td:last-child{border-bottom-right-radius:3px}"], encapsulation: 2, changeDetection: 0 });
    return UniMarkedComponent;
}());
export { UniMarkedComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniMarkedComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-marked',
                exportAs: 'uniMarked',
                template: "<ng-content></ng-content>",
                styleUrls: ['./marked.component.scss'],
                host: { class: 'uni-marked' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }, { type: i0.ElementRef }]; }, { markdown: [{
            type: Input
        }], highlight: [{
            type: Input
        }], sanitize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbWFya2VkL21hcmtlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsVUFBVSxFQUNWLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sSUFBSSxNQUFNLGNBQWMsQ0FBQzs7OztBQUVoQztJQXdERSw0QkFDbUIsSUFBdUIsRUFDdkIsVUFBd0IsRUFDeEIsR0FBNEI7UUFGNUIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUN4QixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQVh2QyxhQUFRLEdBQXlCO1lBQ3ZDLE1BQU0sRUFBRSxJQUFJO1lBQ1osVUFBVSxFQUFFLElBQUk7WUFDaEIsR0FBRyxFQUFFLElBQUk7WUFDVCxNQUFNLEVBQUUsSUFBSTtZQUNaLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUM7SUFNRSxDQUFDO0lBakRMLHNCQUNJLHdDQUFRO2FBRFosY0FDaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN6QyxVQUFhLENBQVM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BSndDO0lBT3pDLHNCQUNJLHlDQUFTO2FBRGIsY0FDa0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUMzQyxVQUFjLENBQVU7WUFDdEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQzs7O09BUDBDO0lBVTNDLHNCQUNJLHdDQUFRO2FBRFosY0FDaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN6QyxVQUFhLENBQVU7WUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQU53QztJQVN6QyxzQkFBSSxvQ0FBSTthQUFSLGNBQWEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNqQyxVQUFTLENBQVM7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FMZ0M7SUFzQnpCLGdEQUFtQixHQUEzQixVQUE0QixJQUFZO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzt3RkF0RFUsa0JBQWtCOzJEQUFsQixrQkFBa0I7O1lBTmxCLGtCQUFZOzs2QkFuQnpCO0NBZ0ZDLEFBakVELElBaUVDO1NBdkRZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBVjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7Z0JBQzdCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBUUwsS0FBSzs7a0JBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2VjdXJpdHlDb250ZXh0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcbmltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1tYXJrZWQnLFxuICBleHBvcnRBczogJ3VuaU1hcmtlZCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL21hcmtlZC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7IGNsYXNzOiAndW5pLW1hcmtlZCcgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaU1hcmtlZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGdldCBtYXJrZG93bigpIHsgcmV0dXJuIHRoaXMuX21hcmtkb3duOyB9XG4gIHNldCBtYXJrZG93bih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tYXJrZG93biA9IHY7XG4gICAgdGhpcy5odG1sID0gbWFya2VkKHYgfHwgJycsIHRoaXMuX29wdGlvbnMpO1xuICB9XG4gIHByaXZhdGUgX21hcmtkb3duOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhpZ2hsaWdodCgpIHsgcmV0dXJuIHRoaXMuX2hpZ2hsaWdodDsgfVxuICBzZXQgaGlnaGxpZ2h0KHY6IGJvb2xlYW4pIHtcbiAgICBpZiAodiAhPT0gdGhpcy5faGlnaGxpZ2h0KSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgICB0aGlzLl9vcHRpb25zLmhpZ2hsaWdodCA9IHRoaXMuX2hpZ2hsaWdodCA/IHRoaXMuX2hpZ2hsaWdodENvZGVCbG9jay5iaW5kKHRoaXMpIDogbnVsbDtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0PzogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBnZXQgc2FuaXRpemUoKSB7IHJldHVybiB0aGlzLl9zYW5pdGl6ZTsgfVxuICBzZXQgc2FuaXRpemUodjogYm9vbGVhbikge1xuICAgIGlmICh2ICE9PSB0aGlzLl9zYW5pdGl6ZSkge1xuICAgICAgdGhpcy5fc2FuaXRpemUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Nhbml0aXplPzogYm9vbGVhbjtcblxuICBnZXQgaHRtbCgpIHsgcmV0dXJuIHRoaXMuX2h0bWw7IH1cbiAgc2V0IGh0bWwodjogc3RyaW5nKSB7XG4gICAgdGhpcy5faHRtbCA9IHRoaXMuX3Nhbml0aXplID8gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCB2KSA6IHY7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9odG1sO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBwcml2YXRlIF9odG1sPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IG1hcmtlZC5NYXJrZWRPcHRpb25zID0ge1xuICAgIHNpbGVudDogdHJ1ZSxcbiAgICBzbWFydExpc3RzOiB0cnVlLFxuICAgIGdmbTogdHJ1ZSxcbiAgICBicmVha3M6IHRydWUsXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICApIHsgfVxuXG4gIHByaXZhdGUgX2hpZ2hsaWdodENvZGVCbG9jayhjb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlO1xuICB9XG59XG4iXX0=