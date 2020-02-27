import { __assign, __extends } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { UniColor } from '../core/enums';
import { UNI_HOST_COLORS } from '../core/constants';
import { UniFormFieldControlBase, uniFormFieldProvider } from '../form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var _c0 = ["*"];
var UniSlideToggleComponent = /** @class */ (function (_super) {
    __extends(UniSlideToggleComponent, _super);
    function UniSlideToggleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = UniColor.Primary;
        return _this;
    }
    UniSlideToggleComponent.ɵfac = function UniSlideToggleComponent_Factory(t) { return ɵUniSlideToggleComponent_BaseFactory(t || UniSlideToggleComponent); };
    UniSlideToggleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSlideToggleComponent, selectors: [["uni-slide-toggle"]], hostAttrs: [1, "uni-slide-toggle"], hostVars: 10, hostBindings: function UniSlideToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
        } }, inputs: { color: "color" }, exportAs: ["uniSlideToggle"], features: [i0.ɵɵProvidersFeature([uniFormFieldProvider(UniSlideToggleComponent)]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 5, vars: 5, consts: [[1, "uni-slide-toggle--switch", 3, "for"], ["type", "checkbox", 1, "uni-slide-toggle--checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-slide-toggle--slider"], [1, "uni-slide-toggle--label", 3, "for"]], template: function UniSlideToggleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "label", 0);
            i0.ɵɵelementStart(1, "input", 1);
            i0.ɵɵlistener("ngModelChange", function UniSlideToggleComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label", 3);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("for", ctx.id);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("for", ctx.id);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [".uni-slide-toggle{display:-webkit-inline-box;display:inline-flex}.uni-slide-toggle.disabled{opacity:.7;cursor:not-allowed}.uni-slide-toggle.disabled *{cursor:not-allowed!important}.uni-slide-toggle .uni-slide-toggle--label{margin:auto 0 auto 5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uni-slide-toggle .uni-slide-toggle--switch{position:relative;width:50px;height:30px;margin:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox{opacity:0;width:0;height:0}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider{background-color:var(--primary)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--checkbox:checked+.uni-slide-toggle--slider:before{-webkit-transform:translateX(21px);transform:translateX(21px)}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--grey);-webkit-transition:.4s;transition:.4s;border-radius:34px}.uni-slide-toggle .uni-slide-toggle--switch .uni-slide-toggle--slider:before{position:absolute;box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4);content:\"\";height:22px;width:22px;left:4px;bottom:4px;background-color:var(--white);-webkit-transition:.4s;transition:.4s;border-radius:50%}"], encapsulation: 2, changeDetection: 0 });
    return UniSlideToggleComponent;
}(UniFormFieldControlBase));
export { UniSlideToggleComponent };
var ɵUniSlideToggleComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniSlideToggleComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSlideToggleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSlideToggle',
                selector: 'uni-slide-toggle',
                templateUrl: './slide-toggle.component.html',
                styleUrls: ['./slide-toggle.component.scss'],
                host: __assign({ class: 'uni-slide-toggle', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniSlideToggleComponent)],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQudHMiLCJsaWIvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTlFO0lBZTZDLDJDQUFnQztJQWY3RTtRQUFBLHFFQWlCQztRQURVLFdBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDOztLQUNuQztrSUFGWSx1QkFBdUI7Z0VBQXZCLHVCQUF1Qjs7d0dBSnZCLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7WUNsQjVELGdDQUNFO1lBQUEsZ0NBT0E7WUFIRSwrSUFBbUI7WUFKckIsaUJBT0E7WUFBQSwwQkFBOEM7WUFDaEQsaUJBQVE7WUFFUixnQ0FDRTtZQUFBLGtCQUFZO1lBQ2QsaUJBQVE7O1lBYmdDLDRCQUFVO1lBSTlDLGVBQVM7WUFBVCwyQkFBUyxzQkFBQSwwQkFBQTtZQU8wQixlQUFVO1lBQVYsNEJBQVU7O2tDRFhqRDtDQXdCQyxBQWpCRCxDQWU2Qyx1QkFBdUIsR0FFbkU7U0FGWSx1QkFBdUI7b0VBQXZCLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBZm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxJQUFJLGFBQ0YsS0FBSyxFQUFFLGtCQUFrQixFQUN6QixrQkFBa0IsRUFBRSxVQUFVLElBQzNCLGVBQWUsQ0FDbkI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVuaUNvbG9yIH0gZnJvbSAnLi4vY29yZS9lbnVtcyc7XG5pbXBvcnQgeyBVTklfSE9TVF9DT0xPUlMgfSBmcm9tICcuLi9jb3JlL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IFVuaUZvcm1GaWVsZENvbnRyb2xCYXNlLCB1bmlGb3JtRmllbGRQcm92aWRlciB9IGZyb20gJy4uL2Zvcm0tZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgZXhwb3J0QXM6ICd1bmlTbGlkZVRvZ2dsZScsXG4gIHNlbGVjdG9yOiAndW5pLXNsaWRlLXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZS10b2dnbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZS10b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXNsaWRlLXRvZ2dsZScsXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgIC4uLlVOSV9IT1NUX0NPTE9SUyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbdW5pRm9ybUZpZWxkUHJvdmlkZXIoVW5pU2xpZGVUb2dnbGVDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVNsaWRlVG9nZ2xlQ29tcG9uZW50IGV4dGVuZHMgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2U8Ym9vbGVhbj4ge1xuICBASW5wdXQoKSBjb2xvciA9IFVuaUNvbG9yLlByaW1hcnk7XG59XG4iLCI8bGFiZWwgY2xhc3M9XCJ1bmktc2xpZGUtdG9nZ2xlLS1zd2l0Y2hcIiBbZm9yXT1cImlkXCI+XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwidW5pLXNsaWRlLXRvZ2dsZS0tY2hlY2tib3hcIlxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgW2lkXT1cImlkXCJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAvPlxuICA8c3BhbiBjbGFzcz1cInVuaS1zbGlkZS10b2dnbGUtLXNsaWRlclwiPjwvc3Bhbj5cbjwvbGFiZWw+XG5cbjxsYWJlbCBjbGFzcz1cInVuaS1zbGlkZS10b2dnbGUtLWxhYmVsXCIgW2Zvcl09XCJpZFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2xhYmVsPlxuIl19