import { __assign, __extends } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { UniColor } from '../core/enums';
import { UNI_HOST_COLORS } from '../core/constants';
import { UniFormFieldControlBase, uniFormFieldProvider } from '../form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var _c0 = ["*"];
var UniCheckboxComponent = /** @class */ (function (_super) {
    __extends(UniCheckboxComponent, _super);
    function UniCheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diameter = '18px';
        _this.color = UniColor.Primary;
        return _this;
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
    return UniCheckboxComponent;
}(UniFormFieldControlBase));
export { UniCheckboxComponent };
var ɵUniCheckboxComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniCheckboxComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniCheckboxComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniCheckbox',
                selector: 'uni-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss'],
                host: __assign({ class: 'uni-checkbox', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniCheckboxComponent)],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { diameter: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJsaWIvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU5RTtJQWUwQyx3Q0FBZ0M7SUFmMUU7UUFBQSxxRUFrQkM7UUFGVSxjQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLFdBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDOztLQUNuQzt5SEFIWSxvQkFBb0I7NkRBQXBCLG9CQUFvQjs7MkhBSnBCLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7WUNsQnpELGdDQUNFO1lBQUEsZ0NBT0E7WUFKRSw0SUFBbUI7WUFIckIsaUJBT0E7WUFBQSx5QkFPTztZQUVQLDhCQUNFO1lBQUEsa0JBQVk7WUFDZCxpQkFBTTtZQUNSLGlCQUFROztZQXBCMkIsNEJBQVU7WUFHekMsZUFBUztZQUFULDJCQUFTLHNCQUFBLDBCQUFBO1lBUVQsZUFBd0I7WUFBeEIscUNBQXdCLHdCQUFBLDJCQUFBLDRCQUFBO1lBRHhCLG9DQUF1Qjs7K0JEVjNCO0NBeUJDLEFBbEJELENBZTBDLHVCQUF1QixHQUdoRTtTQUhZLG9CQUFvQjtpRUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FmaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsSUFBSSxhQUNGLEtBQUssRUFBRSxjQUFjLEVBQ3JCLGtCQUFrQixFQUFFLFVBQVUsSUFDM0IsZUFBZSxDQUNuQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUN2RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O2tCQUVFLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pQ29sb3IgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IFVOSV9IT1NUX0NPTE9SUyB9IGZyb20gJy4uL2NvcmUvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2UsIHVuaUZvcm1GaWVsZFByb3ZpZGVyIH0gZnJvbSAnLi4vZm9ybS1maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBleHBvcnRBczogJ3VuaUNoZWNrYm94JyxcbiAgc2VsZWN0b3I6ICd1bmktY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktY2hlY2tib3gnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAuLi5VTklfSE9TVF9DT0xPUlMsXG4gIH0sXG4gIHByb3ZpZGVyczogW3VuaUZvcm1GaWVsZFByb3ZpZGVyKFVuaUNoZWNrYm94Q29tcG9uZW50KV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlDaGVja2JveENvbXBvbmVudCBleHRlbmRzIFVuaUZvcm1GaWVsZENvbnRyb2xCYXNlPGJvb2xlYW4+IHtcbiAgQElucHV0KCkgZGlhbWV0ZXIgPSAnMThweCc7XG4gIEBJbnB1dCgpIGNvbG9yID0gVW5pQ29sb3IuUHJpbWFyeTtcbn1cbiIsIjxsYWJlbCBjbGFzcz1cInVuaS1jaGVja2JveC0tbGFiZWxcIiBbZm9yXT1cImlkXCI+XG4gIDxpbnB1dFxuICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgW2lkXT1cImlkXCJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAvPlxuXG4gIDxkaXZcbiAgICBjbGFzcz1cInVuaS1jaGVja2JveC0tYm94XCJcbiAgICBbY2xhc3MuY2hlY2tlZF09XCJ2YWx1ZVwiXG4gICAgW3N0eWxlLndpZHRoXT1cImRpYW1ldGVyXCJcbiAgICBbc3R5bGUuaGVpZ2h0XT1cImRpYW1ldGVyXCJcbiAgICBbc3R5bGUubWluLXdpZHRoXT1cImRpYW1ldGVyXCJcbiAgICBbc3R5bGUubWluLWhlaWdodF09XCJkaWFtZXRlclwiXG4gID48L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwidW5pLWNoZWNrYm94LS1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbGFiZWw+XG4iXX0=