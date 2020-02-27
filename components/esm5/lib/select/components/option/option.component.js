import { __assign } from "tslib";
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';
import { UniColor } from '../../../core/enums';
import { UNI_HOST_COLORS } from '../../../core/constants';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var UniOptionComponent = /** @class */ (function () {
    function UniOptionComponent(_el) {
        this._el = _el;
        this.disabled = false;
        this.selected = false;
        this.selectionChanged = new EventEmitter();
    }
    Object.defineProperty(UniOptionComponent.prototype, "content", {
        get: function () {
            return this._el.nativeElement.textContent.trim();
        },
        enumerable: true,
        configurable: true
    });
    UniOptionComponent.prototype.select = function () {
        if (!this.disabled && !this.selected) {
            this.selected = true;
            this._emitChanged();
        }
    };
    UniOptionComponent.prototype.deselect = function () {
        if (!this.disabled && this.selected) {
            this.selected = false;
            this._emitChanged();
        }
    };
    UniOptionComponent.prototype._emitChanged = function () {
        this.selectionChanged.emit({ source: this });
    };
    UniOptionComponent.ɵfac = function UniOptionComponent_Factory(t) { return new (t || UniOptionComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniOptionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniOptionComponent, selectors: [["uni-option"]], hostAttrs: [1, "uni-option"], hostVars: 12, hostBindings: function UniOptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function UniOptionComponent_click_HostBindingHandler($event) { return ctx.select(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger")("disabled", ctx.disabled)("selected", ctx.selected);
        } }, inputs: { value: "value", color: "color", disabled: "disabled", selected: "selected" }, outputs: { selectionChanged: "selectionChanged" }, exportAs: ["uniOption"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".uni-option{display:block;padding:10px;cursor:pointer}.uni-option.selected.primary{color:var(--white);background-color:var(--primary)}.uni-option.selected.success{color:var(--white);background-color:var(--success)}.uni-option.selected.warning{color:var(--black);background-color:var(--warning)}.uni-option.selected.danger{color:var(--white);background-color:var(--danger)}.uni-option.disabled{cursor:default;opacity:.4}.uni-option.disabled:hover{background-color:transparent}.uni-option:hover{background-color:var(--black-a15)}.uni-option:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.uni-option:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}"], encapsulation: 2, changeDetection: 0 });
    return UniOptionComponent;
}());
export { UniOptionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniOptionComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-option',
                exportAs: 'uniOption',
                template: "<ng-content></ng-content>",
                styleUrls: ['./option.component.scss'],
                host: __assign(__assign({ class: 'uni-option' }, UNI_HOST_COLORS), { '[class.disabled]': 'disabled', '[class.selected]': 'selected', '(click)': 'select()' }),
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { value: [{
            type: Input
        }], color: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selected: [{
            type: Input
        }], selectionChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L2NvbXBvbmVudHMvb3B0aW9uL29wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUkxRDtJQTRCRSw0QkFBNkIsR0FBNEI7UUFBNUIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFUaEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWhCLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO0lBTWIsQ0FBQztJQUo3RCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFJRCxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRU8seUNBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzt3RkE5QlUsa0JBQWtCOzJEQUFsQixrQkFBa0I7Ozs7OztZQVpsQixrQkFBWTs7NkJBWHpCO0NBc0RDLEFBL0NELElBK0NDO1NBL0JZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBaEI5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxJQUFJLHNCQUNGLEtBQUssRUFBRSxZQUFZLElBQ2hCLGVBQWUsS0FDbEIsa0JBQWtCLEVBQUUsVUFBVSxFQUM5QixrQkFBa0IsRUFBRSxVQUFVLEVBQzlCLFNBQVMsRUFBRSxVQUFVLEdBQ3RCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pQ29sb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IFVOSV9IT1NUX0NPTE9SUyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgSVVuaU9wdGlvblNlbGVjdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL29wdGlvbi1zZWxlY3RlZC1ldmVudC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktb3B0aW9uJyxcbiAgZXhwb3J0QXM6ICd1bmlPcHRpb24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsnLi9vcHRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLW9wdGlvbicsXG4gICAgLi4uVU5JX0hPU1RfQ09MT1JTLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLnNlbGVjdGVkXSc6ICdzZWxlY3RlZCcsXG4gICAgJyhjbGljayknOiAnc2VsZWN0KCknLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pT3B0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmFsdWU/OiBhbnk7XG4gIEBJbnB1dCgpIGNvbG9yPzogVW5pQ29sb3I7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElVbmlPcHRpb25TZWxlY3RlZEV2ZW50PigpO1xuXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZWQoKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoeyBzb3VyY2U6IHRoaXMgfSk7XG4gIH1cbn1cbiJdfQ==