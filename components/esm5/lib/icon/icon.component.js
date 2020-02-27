import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { UniIconService } from './icon.service';
import * as i0 from "@angular/core";
import * as i1 from "./icon.service";
var UniIconComponent = /** @class */ (function () {
    function UniIconComponent(_el, _iconService) {
        this._el = _el;
        this._iconService = _iconService;
    }
    Object.defineProperty(UniIconComponent.prototype, "icon", {
        get: function () { return this._icon; },
        set: function (v) {
            if (v !== this._icon) {
                if (v && this._el.nativeElement.classList.contains(this._icon)) {
                    this._el.nativeElement.classList.remove(this._icon);
                }
                this._icon = v;
                this._el.nativeElement.classList.add(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    UniIconComponent.prototype.ngOnInit = function () {
        this._el.nativeElement.classList.add(this._iconService.prefix);
    };
    UniIconComponent.ɵfac = function UniIconComponent_Factory(t) { return new (t || UniIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UniIconService)); };
    UniIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniIconComponent, selectors: [["uni-icon"]], hostAttrs: [1, "uni-icon"], inputs: { icon: "icon" }, exportAs: ["uniIcon"], decls: 0, vars: 0, template: function UniIconComponent_Template(rf, ctx) { }, styles: [".uni-icon{display:inline-block}"], encapsulation: 2, changeDetection: 0 });
    return UniIconComponent;
}());
export { UniIconComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniIconComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-icon',
                exportAs: 'uniIcon',
                template: "",
                styleUrls: ['./icon.component.scss'],
                host: { class: 'uni-icon' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.UniIconService }]; }, { icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRWhEO0lBeUJFLDBCQUNtQixHQUE0QixFQUM1QixZQUE0QjtRQUQ1QixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7SUFDM0MsQ0FBQztJQWpCTCxzQkFDSSxrQ0FBSTthQURSLGNBQ2EsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNqQyxVQUFTLENBQVM7WUFDaEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyRDtnQkFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQzs7O09BVmdDO0lBa0JqQyxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7b0ZBdEJVLGdCQUFnQjt5REFBaEIsZ0JBQWdCOzJCQWQ3QjtDQXFDQyxBQWpDRCxJQWlDQztTQXZCWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQVY1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO2dCQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVbmlJY29uU2VydmljZSB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLWljb24nLFxuICBleHBvcnRBczogJ3VuaUljb24nLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDogeyBjbGFzczogJ3VuaS1pY29uJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGdldCBpY29uKCkgeyByZXR1cm4gdGhpcy5faWNvbjsgfVxuICBzZXQgaWNvbih2OiBzdHJpbmcpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5faWNvbikge1xuICAgICAgaWYgKHYgJiYgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5faWNvbikpIHtcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2ljb24pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pY29uID0gdjtcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh2KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pY29uU2VydmljZTogVW5pSWNvblNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2ljb25TZXJ2aWNlLnByZWZpeCk7XG4gIH1cbn1cbiJdfQ==