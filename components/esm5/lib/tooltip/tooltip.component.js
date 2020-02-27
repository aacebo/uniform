import { __assign, __extends } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UNI_POSITIONS, UniPositionBase } from '../core/position';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function UniTooltipComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function UniTooltipComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r27 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r27.content, "\n");
} }
var UniTooltipComponent = /** @class */ (function (_super) {
    __extends(UniTooltipComponent, _super);
    function UniTooltipComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniTooltipComponent.ɵfac = function UniTooltipComponent_Factory(t) { return ɵUniTooltipComponent_BaseFactory(t || UniTooltipComponent); };
    UniTooltipComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniTooltipComponent, selectors: [["uni-tooltip"]], hostAttrs: [1, "uni-tooltip"], hostVars: 16, hostBindings: function UniTooltipComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("top", ctx.position === "top")("bottom", ctx.position === "bottom")("left", ctx.position === "left")("right", ctx.position === "right")("bottom-left", ctx.position === "bottom left")("bottom-right", ctx.position === "bottom right")("top-left", ctx.position === "top left")("top-right", ctx.position === "top right");
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[4, "ngTemplateOutlet"], ["default", ""]], template: function UniTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, UniTooltipComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
            i0.ɵɵtemplate(1, UniTooltipComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r26 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.isString ? _r26 : ctx.content);
        } }, directives: [i1.NgTemplateOutlet], styles: ["[_nghost-%COMP%]{max-width:250px;overflow-wrap:break-word;padding:10px;border-radius:3px;font-size:12px;font-weight:500;background-color:var(--black);color:var(--white);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:relative;background-color:var(--black);border:2px solid var(--black)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}[_nghost-%COMP%]:before{border-color:rgba(194,225,245,0);border-width:calc(7px + 2px + 1px)}[_nghost-%COMP%]:after{border-color:rgba(136,183,213,0);border-width:7px}.top[_nghost-%COMP%]:after, .top[_nghost-%COMP%]:before{top:100%;left:50%}.top[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.bottom[_nghost-%COMP%]:after, .bottom[_nghost-%COMP%]:before{bottom:100%;left:50%}.bottom[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.left[_nghost-%COMP%]:after, .left[_nghost-%COMP%]:before{left:100%;top:50%}.left[_nghost-%COMP%]:before{border-left-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.left[_nghost-%COMP%]:after{border-left-color:var(--black);margin-top:calc(7px * -1)}.right[_nghost-%COMP%]:after, .right[_nghost-%COMP%]:before{right:100%;top:50%}.right[_nghost-%COMP%]:before{border-right-color:var(--black);margin-top:calc((7px + 2px + 1px) * -1)}.right[_nghost-%COMP%]:after{border-right-color:var(--black);margin-top:calc(7px * -1)}.bottom-left[_nghost-%COMP%]:after, .bottom-left[_nghost-%COMP%]:before{bottom:100%;left:calc(100% - 14px)}.bottom-left[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-left[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.bottom-right[_nghost-%COMP%]:after, .bottom-right[_nghost-%COMP%]:before{bottom:100%;left:14px}.bottom-right[_nghost-%COMP%]:before{border-bottom-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.bottom-right[_nghost-%COMP%]:after{border-bottom-color:var(--black);margin-left:calc(7px * -1)}.top-left[_nghost-%COMP%]:after, .top-left[_nghost-%COMP%]:before{top:100%;left:calc(100% - 14px)}.top-left[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-left[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top-right[_nghost-%COMP%]:after, .top-right[_nghost-%COMP%]:before{top:100%;left:14px}.top-right[_nghost-%COMP%]:before{border-top-color:var(--black);margin-left:calc((7px + 2px + 1px) * -1)}.top-right[_nghost-%COMP%]:after{border-top-color:var(--black);margin-left:calc(7px * -1)}.top[_nghost-%COMP%], .top-left[_nghost-%COMP%], .top-right[_nghost-%COMP%]{margin-bottom:10px}.bottom[_nghost-%COMP%], .bottom-left[_nghost-%COMP%], .bottom-right[_nghost-%COMP%]{margin-top:10px}.left[_nghost-%COMP%]{margin-right:10px}.right[_nghost-%COMP%]{margin-left:10px}"], changeDetection: 0 });
    return UniTooltipComponent;
}(UniPositionBase));
export { UniTooltipComponent };
var ɵUniTooltipComponent_BaseFactory = i0.ɵɵgetInheritedFactory(UniTooltipComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniTooltipComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-tooltip',
                templateUrl: './tooltip.component.html',
                styleUrls: ['./tooltip.component.scss'],
                host: __assign({ class: 'uni-tooltip' }, UNI_POSITIONS),
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiLCJsaWIvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7SUNGbEUsd0JBQThFOzs7SUFHNUUsWUFDRjs7O0lBREUsaURBQ0Y7O0FEQUE7SUFXeUMsdUNBQWU7SUFYeEQ7O0tBVzJEO3NIQUE5QyxtQkFBbUI7NERBQW5CLG1CQUFtQjs7O1lDZmhDLHNGQUErRDtZQUUvRCxxSEFDRTs7O1lBSFksb0VBQWdEOzs4QkRBOUQ7Q0FlMkQsQUFYM0QsQ0FXeUMsZUFBZSxHQUFHO1NBQTlDLG1CQUFtQjtnRUFBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FYL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxJQUFJLGFBQ0YsS0FBSyxFQUFFLGFBQWEsSUFDakIsYUFBYSxDQUNqQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVU5JX1BPU0lUSU9OUywgVW5pUG9zaXRpb25CYXNlIH0gZnJvbSAnLi4vY29yZS9wb3NpdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b29sdGlwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3VuaS10b29sdGlwJyxcbiAgICAuLi5VTklfUE9TSVRJT05TLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVW5pVG9vbHRpcENvbXBvbmVudCBleHRlbmRzIFVuaVBvc2l0aW9uQmFzZSB7fVxuIiwiPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImlzU3RyaW5nID8gZGVmYXVsdCA6IGNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0PlxuICB7eyBjb250ZW50IH19XG48L25nLXRlbXBsYXRlPlxuIl19