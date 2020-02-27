import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class UniSplitAreaComponent {
    constructor(_cdr, _el) {
        this._cdr = _cdr;
        this._el = _el;
        this._flex = '1 1 auto';
        this.flexChange = new EventEmitter();
    }
    get flex() { return this._flex; }
    set flex(v) {
        if (v !== this._flex) {
            this._flex = v;
            this._cdr.markForCheck();
            this.flexChange.emit(this._flex);
        }
    }
    get index() { return this._index; }
    set index(v) {
        if (v !== this._index) {
            this._index = coerceNumberProperty(v);
            this._cdr.markForCheck();
        }
    }
    get clientWidth() {
        return this._el.nativeElement.clientWidth;
    }
    get clientHeight() {
        return this._el.nativeElement.clientHeight;
    }
}
UniSplitAreaComponent.ɵfac = function UniSplitAreaComponent_Factory(t) { return new (t || UniSplitAreaComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
UniSplitAreaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSplitAreaComponent, selectors: [["uni-split-area"]], hostAttrs: [1, "uni-split-area"], hostVars: 4, hostBindings: function UniSplitAreaComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("order", ctx.index)("flex", ctx.flex);
    } }, inputs: { flex: "flex", index: "index" }, outputs: { flexChange: "flexChange" }, exportAs: ["uniSplitArea"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniSplitAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".uni-split-area{display:-webkit-box;display:flex;overflow:auto;background-color:var(--darker)}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSplitAreaComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplitArea',
                selector: 'uni-split-area',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./split-area.component.scss'],
                host: {
                    class: 'uni-split-area',
                    '[style.order]': 'index',
                    '[style.flex]': 'flex',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { flex: [{
            type: Input
        }], index: [{
            type: Input
        }], flexChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NwbGl0L2NvbXBvbmVudHMvYXJlYS9zcGxpdC1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBZ0I3RCxNQUFNLE9BQU8scUJBQXFCO0lBZ0NoQyxZQUNtQixJQUF1QixFQUN2QixHQUE0QjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQXhCdkMsVUFBSyxHQUFHLFVBQVUsQ0FBQztRQVlqQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWE5QyxDQUFDO0lBbENMLElBQ0ksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakMsSUFBSSxJQUFJLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBR0QsSUFDSSxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLEtBQUssQ0FBQyxDQUFTO1FBQ2pCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUtELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUM3QyxDQUFDOzswRkE5QlUscUJBQXFCOzBEQUFyQixxQkFBcUI7Ozs7UUFWckIsa0JBQVk7O2tEQVVaLHFCQUFxQjtjQWRqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsZ0JBQWdCO29CQUN2QixlQUFlLEVBQUUsT0FBTztvQkFDeEIsY0FBYyxFQUFFLE1BQU07aUJBQ3ZCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBV0wsS0FBSzs7a0JBVUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIGV4cG9ydEFzOiAndW5pU3BsaXRBcmVhJyxcbiAgc2VsZWN0b3I6ICd1bmktc3BsaXQtYXJlYScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL3NwbGl0LWFyZWEuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXNwbGl0LWFyZWEnLFxuICAgICdbc3R5bGUub3JkZXJdJzogJ2luZGV4JyxcbiAgICAnW3N0eWxlLmZsZXhdJzogJ2ZsZXgnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU3BsaXRBcmVhQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZ2V0IGZsZXgoKSB7IHJldHVybiB0aGlzLl9mbGV4OyB9XG4gIHNldCBmbGV4KHY6IHN0cmluZykge1xuICAgIGlmICh2ICE9PSB0aGlzLl9mbGV4KSB7XG4gICAgICB0aGlzLl9mbGV4ID0gdjtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuZmxleENoYW5nZS5lbWl0KHRoaXMuX2ZsZXgpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9mbGV4ID0gJzEgMSBhdXRvJztcblxuICBASW5wdXQoKVxuICBnZXQgaW5kZXgoKSB7IHJldHVybiB0aGlzLl9pbmRleDsgfVxuICBzZXQgaW5kZXgodjogbnVtYmVyKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX2luZGV4KSB7XG4gICAgICB0aGlzLl9pbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYpO1xuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9pbmRleD86IG51bWJlcjtcblxuICBAT3V0cHV0KCkgZmxleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGdldCBjbGllbnRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGdldCBjbGllbnRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICkgeyB9XG59XG4iXX0=