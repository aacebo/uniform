import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { UniColor } from '../core/enums';
import { UNI_HOST_COLORS } from '../core/constants';
import { UniFormFieldControlBase, uniFormFieldProvider } from '../form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["*"];
export class UniCheckboxComponent extends UniFormFieldControlBase {
    constructor() {
        super(...arguments);
        this.diameter = '18px';
        this.color = UniColor.Primary;
    }
}
UniCheckboxComponent.ɵfac = function UniCheckboxComponent_Factory(t) { return ɵUniCheckboxComponent_BaseFactory(t || UniCheckboxComponent); };
UniCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniCheckboxComponent, selectors: [["uni-checkbox"]], hostAttrs: [1, "uni-checkbox"], hostVars: 10, hostBindings: function UniCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.disabled)("primary", ctx.color === "primary")("success", ctx.color === "success")("warning", ctx.color === "warning")("danger", ctx.color === "danger");
    } }, inputs: { diameter: "diameter", color: "color" }, exportAs: ["uniCheckbox"], features: [i0.ɵɵProvidersFeature([uniFormFieldProvider(UniCheckboxComponent)]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 5, vars: 14, consts: [[1, "uni-checkbox--label", 3, "for"], ["type", "checkbox", 3, "id", "ngModel", "disabled", "ngModelChange"], [1, "uni-checkbox--box"], [1, "uni-checkbox--content"]], template: function UniCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵelementStart(1, "input", 1);
        i0.ɵɵlistener("ngModelChange", function UniCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("for", ctx.id);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("id", ctx.id)("ngModel", ctx.value)("disabled", ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.diameter)("height", ctx.diameter)("min-width", ctx.diameter)("min-height", ctx.diameter);
        i0.ɵɵclassProp("checked", ctx.value);
    } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], styles: [".uni-checkbox{display:-webkit-inline-box;display:inline-flex}.uni-checkbox.primary .uni-checkbox--box.checked{background-color:var(--primary);border-color:var(--primary)}.uni-checkbox.success .uni-checkbox--box.checked{background-color:var(--success);border-color:var(--success)}.uni-checkbox.danger .uni-checkbox--box.checked{background-color:var(--danger);border-color:var(--danger)}.uni-checkbox.warning .uni-checkbox--box.checked{background-color:var(--warning);border-color:var(--warning)}.uni-checkbox.disabled{opacity:.7;cursor:not-allowed}.uni-checkbox.disabled *{cursor:not-allowed!important}.uni-checkbox .uni-checkbox--label{display:-webkit-box;display:flex;cursor:pointer;margin-bottom:0}.uni-checkbox .uni-checkbox--label input{display:none}.uni-checkbox .uni-checkbox--label .uni-checkbox--box{border-radius:5px;background-color:transparent;border:2px solid var(--hairline-strong);-webkit-transition:.3s ease-out;transition:.3s ease-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:auto 10px auto 0}.uni-checkbox .uni-checkbox--label .uni-checkbox--box:after{position:absolute;top:calc(50% - 8px);left:calc(50% - 3px);width:6px;height:12px;content:\"\";border:solid var(--white);border-width:0 2px 2px 0;-webkit-transform:rotate(0) scale(0);transform:rotate(0) scale(0);-webkit-transition:.3s ease-out;transition:.3s ease-out}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked{border-radius:5px;opacity:1;-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--box.checked:after{-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.uni-checkbox .uni-checkbox--label .uni-checkbox--content{margin:auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"], encapsulation: 2, changeDetection: 0 });
const ɵUniCheckboxComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniCheckboxComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniCheckboxComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniCheckbox',
                selector: 'uni-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                host: Object.assign({ class: 'uni-checkbox', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniCheckboxComponent)],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { diameter: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJsaWIvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBaUI5RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsdUJBQWdDO0lBZjFFOztRQWdCVyxhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLFVBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0tBQ25DOztxSEFIWSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7dUhBSnBCLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7UUNsQnpELGdDQUNFO1FBQUEsZ0NBT0E7UUFKRSw0SUFBbUI7UUFIckIsaUJBT0E7UUFBQSx5QkFPTztRQUVQLDhCQUNFO1FBQUEsa0JBQVk7UUFDZCxpQkFBTTtRQUNSLGlCQUFROztRQXBCMkIsNEJBQVU7UUFHekMsZUFBUztRQUFULDJCQUFTLHNCQUFBLDBCQUFBO1FBUVQsZUFBd0I7UUFBeEIscUNBQXdCLHdCQUFBLDJCQUFBLDRCQUFBO1FBRHhCLG9DQUF1Qjs7bUVEWWQsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FmaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsSUFBSSxrQkFDRixLQUFLLEVBQUUsY0FBYyxFQUNyQixrQkFBa0IsRUFBRSxVQUFVLElBQzNCLGVBQWUsQ0FDbkI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDdkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVuaUNvbG9yIH0gZnJvbSAnLi4vY29yZS9lbnVtcyc7XG5pbXBvcnQgeyBVTklfSE9TVF9DT0xPUlMgfSBmcm9tICcuLi9jb3JlL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IFVuaUZvcm1GaWVsZENvbnRyb2xCYXNlLCB1bmlGb3JtRmllbGRQcm92aWRlciB9IGZyb20gJy4uL2Zvcm0tZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgZXhwb3J0QXM6ICd1bmlDaGVja2JveCcsXG4gIHNlbGVjdG9yOiAndW5pLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLWNoZWNrYm94JyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgLi4uVU5JX0hPU1RfQ09MT1JTLFxuICB9LFxuICBwcm92aWRlcnM6IFt1bmlGb3JtRmllbGRQcm92aWRlcihVbmlDaGVja2JveENvbXBvbmVudCldLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVW5pQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBVbmlGb3JtRmllbGRDb250cm9sQmFzZTxib29sZWFuPiB7XG4gIEBJbnB1dCgpIGRpYW1ldGVyID0gJzE4cHgnO1xuICBASW5wdXQoKSBjb2xvciA9IFVuaUNvbG9yLlByaW1hcnk7XG59XG4iLCI8bGFiZWwgY2xhc3M9XCJ1bmktY2hlY2tib3gtLWxhYmVsXCIgW2Zvcl09XCJpZFwiPlxuICA8aW5wdXRcbiAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgIFtpZF09XCJpZFwiXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgLz5cblxuICA8ZGl2XG4gICAgY2xhc3M9XCJ1bmktY2hlY2tib3gtLWJveFwiXG4gICAgW2NsYXNzLmNoZWNrZWRdPVwidmFsdWVcIlxuICAgIFtzdHlsZS53aWR0aF09XCJkaWFtZXRlclwiXG4gICAgW3N0eWxlLmhlaWdodF09XCJkaWFtZXRlclwiXG4gICAgW3N0eWxlLm1pbi13aWR0aF09XCJkaWFtZXRlclwiXG4gICAgW3N0eWxlLm1pbi1oZWlnaHRdPVwiZGlhbWV0ZXJcIlxuICA+PC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInVuaS1jaGVja2JveC0tY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2xhYmVsPlxuIl19