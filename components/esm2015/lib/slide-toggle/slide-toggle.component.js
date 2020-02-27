import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { UniColor } from '../core/enums';
import { UNI_HOST_COLORS } from '../core/constants';
import { UniFormFieldControlBase, uniFormFieldProvider } from '../form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["*"];
export class UniSlideToggleComponent extends UniFormFieldControlBase {
    constructor() {
        super(...arguments);
        this.color = UniColor.Primary;
    }
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
const ɵUniSlideToggleComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniSlideToggleComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSlideToggleComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSlideToggle',
                selector: 'uni-slide-toggle',
                templateUrl: './slide-toggle.component.html',
                styleUrls: ['./slide-toggle.component.scss'],
                host: Object.assign({ class: 'uni-slide-toggle', '[class.disabled]': 'disabled' }, UNI_HOST_COLORS),
                providers: [uniFormFieldProvider(UniSlideToggleComponent)],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQudHMiLCJsaWIvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFpQjlFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSx1QkFBZ0M7SUFmN0U7O1FBZ0JXLFVBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0tBQ25DOzs4SEFGWSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs7b0dBSnZCLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7UUNsQjVELGdDQUNFO1FBQUEsZ0NBT0E7UUFIRSwrSUFBbUI7UUFKckIsaUJBT0E7UUFBQSwwQkFBOEM7UUFDaEQsaUJBQVE7UUFFUixnQ0FDRTtRQUFBLGtCQUFZO1FBQ2QsaUJBQVE7O1FBYmdDLDRCQUFVO1FBSTlDLGVBQVM7UUFBVCwyQkFBUyxzQkFBQSwwQkFBQTtRQU8wQixlQUFVO1FBQVYsNEJBQVU7O3NFRFdwQyx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQWZuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsSUFBSSxrQkFDRixLQUFLLEVBQUUsa0JBQWtCLEVBQ3pCLGtCQUFrQixFQUFFLFVBQVUsSUFDM0IsZUFBZSxDQUNuQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUMxRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pQ29sb3IgfSBmcm9tICcuLi9jb3JlL2VudW1zJztcbmltcG9ydCB7IFVOSV9IT1NUX0NPTE9SUyB9IGZyb20gJy4uL2NvcmUvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgVW5pRm9ybUZpZWxkQ29udHJvbEJhc2UsIHVuaUZvcm1GaWVsZFByb3ZpZGVyIH0gZnJvbSAnLi4vZm9ybS1maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBleHBvcnRBczogJ3VuaVNsaWRlVG9nZ2xlJyxcbiAgc2VsZWN0b3I6ICd1bmktc2xpZGUtdG9nZ2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktc2xpZGUtdG9nZ2xlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgLi4uVU5JX0hPU1RfQ09MT1JTLFxuICB9LFxuICBwcm92aWRlcnM6IFt1bmlGb3JtRmllbGRQcm92aWRlcihVbmlTbGlkZVRvZ2dsZUNvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU2xpZGVUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBVbmlGb3JtRmllbGRDb250cm9sQmFzZTxib29sZWFuPiB7XG4gIEBJbnB1dCgpIGNvbG9yID0gVW5pQ29sb3IuUHJpbWFyeTtcbn1cbiIsIjxsYWJlbCBjbGFzcz1cInVuaS1zbGlkZS10b2dnbGUtLXN3aXRjaFwiIFtmb3JdPVwiaWRcIj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJ1bmktc2xpZGUtdG9nZ2xlLS1jaGVja2JveFwiXG4gICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICBbaWRdPVwiaWRcIlxuICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIC8+XG4gIDxzcGFuIGNsYXNzPVwidW5pLXNsaWRlLXRvZ2dsZS0tc2xpZGVyXCI+PC9zcGFuPlxuPC9sYWJlbD5cblxuPGxhYmVsIGNsYXNzPVwidW5pLXNsaWRlLXRvZ2dsZS0tbGFiZWxcIiBbZm9yXT1cImlkXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG4iXX0=