import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UNI_TOAST_OPTIONS } from './toast-options.constant';
import { UNI_TOAST_CONFIG } from './toast-config.constant';
import { UniToastRef } from './toast-ref.class';
import * as i0 from "@angular/core";
import * as i1 from "./toast-ref.class";
import * as i2 from "@angular/common";
function UniToastComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r31.options.title, " ");
} }
function UniToastComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r32 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(1, 2, ctx_r32.progress$), "%");
} }
var UniToastComponent = /** @class */ (function () {
    function UniToastComponent(config, options, _toastRef) {
        this.config = config;
        this.options = options;
        this._toastRef = _toastRef;
        this.progress$ = new BehaviorSubject(0);
        this._ticks = 25;
        this._total = 100;
    }
    Object.defineProperty(UniToastComponent.prototype, "_tick", {
        get: function () {
            return (this._total / this.options.duration) * this._ticks;
        },
        enumerable: true,
        configurable: true
    });
    UniToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.options.duration) {
            this._timeout = setTimeout(function () {
                _this._toastRef.dismiss();
            }, this.options.duration);
            if (this.config.progressBar) {
                this._interval = setInterval(function () {
                    _this.progress$.next(_this.progress$.value + _this._tick);
                }, this._ticks);
            }
        }
    };
    UniToastComponent.prototype.ngOnDestroy = function () {
        if (this._timeout) {
            clearTimeout(this._timeout);
            if (this._interval) {
                clearInterval(this._interval);
            }
        }
    };
    UniToastComponent.prototype.onClick = function () {
        if (this.config.tapToDismiss) {
            this._toastRef.dismiss();
        }
    };
    UniToastComponent.ɵfac = function UniToastComponent_Factory(t) { return new (t || UniToastComponent)(i0.ɵɵdirectiveInject(UNI_TOAST_CONFIG), i0.ɵɵdirectiveInject(UNI_TOAST_OPTIONS), i0.ɵɵdirectiveInject(i1.UniToastRef)); };
    UniToastComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniToastComponent, selectors: [["uni-toast"]], hostAttrs: [1, "uni-toast"], hostVars: 10, hostBindings: function UniToastComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function UniToastComponent_click_HostBindingHandler($event) { return ctx.onClick(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("info", ctx.options.type === "info")("success", ctx.options.type === "success")("warning", ctx.options.type === "warning")("danger", ctx.options.type === "danger")("dismissable", ctx.config.tapToDismiss);
        } }, exportAs: ["uniToast"], decls: 5, vars: 3, consts: [[1, "uni-toast-content"], ["class", "uni-toast-title", 4, "ngIf"], [1, "uni-toast-message"], ["class", "uni-toast-progressbar", 3, "width", 4, "ngIf"], [1, "uni-toast-title"], [1, "uni-toast-progressbar"]], template: function UniToastComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, UniToastComponent_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, UniToastComponent_div_4_Template, 2, 4, "div", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.options.message, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.progressBar);
        } }, directives: [i2.NgIf], pipes: [i2.AsyncPipe], styles: ["@-webkit-keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}@keyframes uniFadeIn{0%{opacity:0}100%{visibility:visible;opacity:1}}[_nghost-%COMP%]{visibility:hidden;font-size:12pt;color:var(--white);border-radius:3px;min-width:200px;-webkit-animation:.5s both uniFadeIn;animation:.5s both uniFadeIn}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto;padding:15px 20px}[_nghost-%COMP%]   .uni-toast-content[_ngcontent-%COMP%]   .uni-toast-title[_ngcontent-%COMP%]{font-size:14pt;font-weight:550}[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{height:5px;border-bottom-left-radius:3px}.dismissable[_nghost-%COMP%]{cursor:pointer}.info[_nghost-%COMP%]{background-color:var(--primary)}.info[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--primary-l20)}.info[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--primary-l20)}.success[_nghost-%COMP%]{background-color:var(--success)}.success[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--success-l20)}.success[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--success-l20)}.warning[_nghost-%COMP%]{background-color:var(--warning)}.warning[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--warning-l20)}.warning[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--warning-l20)}.danger[_nghost-%COMP%]{background-color:var(--danger)}.danger[_nghost-%COMP%]:hover{box-shadow:inset 0 0 0 3px var(--danger-l20)}.danger[_nghost-%COMP%]   .uni-toast-progressbar[_ngcontent-%COMP%]{background-color:var(--danger-l20)}"], changeDetection: 0 });
    return UniToastComponent;
}());
export { UniToastComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniToastComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-toast',
                exportAs: 'uniToast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.scss'],
                host: {
                    class: 'uni-toast',
                    '[class.info]': 'options.type === "info"',
                    '[class.success]': 'options.type === "success"',
                    '[class.warning]': 'options.type === "warning"',
                    '[class.danger]': 'options.type === "danger"',
                    '[class.dismissable]': 'config.tapToDismiss',
                    '(click)': 'onClick()',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [UNI_TOAST_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [UNI_TOAST_OPTIONS]
            }] }, { type: i1.UniToastRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi90b2FzdC90b2FzdC5jb21wb25lbnQudHMiLCJsaWIvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztJQ045Qyw4QkFFRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLHNEQUNGOzs7SUFNRiw4QkFHTTs7SUFBTixpQkFBTTs7O0lBREQscUVBQW1DOztBREh4QztJQTZCRSwyQkFDcUMsTUFBdUIsRUFDdEIsT0FBeUIsRUFDNUMsU0FBc0I7UUFGSixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUM1QyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBZGhDLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUkzQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osV0FBTSxHQUFHLEdBQUcsQ0FBQztJQVUzQixDQUFDO0lBUkosc0JBQVksb0NBQUs7YUFBakI7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7SUFRRCxvQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO2dCQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO29CQUMzQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7c0ZBOUNVLGlCQUFpQix1QkFhbEIsZ0JBQWdCLHdCQUNoQixpQkFBaUI7MERBZGhCLGlCQUFpQjs7Ozs7WUMxQjlCLDhCQUNFO1lBQUEsa0VBRUU7WUFFRiw4QkFDRTtZQUFBLFlBQ0Y7WUFBQSxpQkFBTTtZQUNSLGlCQUFNO1lBRU4sa0VBR0E7O1lBWk8sZUFBcUI7WUFBckIsd0NBQXFCO1lBS3hCLGVBQ0Y7WUFERSxvREFDRjtZQUlHLGVBQTBCO1lBQTFCLDZDQUEwQjs7NEJEWC9CO0NBeUVDLEFBaEVELElBZ0VDO1NBL0NZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBakI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLGNBQWMsRUFBRSx5QkFBeUI7b0JBQ3pDLGlCQUFpQixFQUFFLDRCQUE0QjtvQkFDL0MsaUJBQWlCLEVBQUUsNEJBQTRCO29CQUMvQyxnQkFBZ0IsRUFBRSwyQkFBMkI7b0JBQzdDLHFCQUFxQixFQUFFLHFCQUFxQjtvQkFDNUMsU0FBUyxFQUFFLFdBQVc7aUJBQ3ZCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkFjSSxNQUFNO3VCQUFDLGdCQUFnQjs7c0JBQ3ZCLE1BQU07dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5qZWN0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFVOSV9UT0FTVF9PUFRJT05TIH0gZnJvbSAnLi90b2FzdC1vcHRpb25zLmNvbnN0YW50JztcbmltcG9ydCB7IFVOSV9UT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LWNvbmZpZy5jb25zdGFudCc7XG5pbXBvcnQgeyBJVW5pVG9hc3RPcHRpb25zIH0gZnJvbSAnLi90b2FzdC1vcHRpb25zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJVW5pVG9hc3RDb25maWcgfSBmcm9tICcuL3RvYXN0LWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVW5pVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LXJlZi5jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS10b2FzdCcsXG4gIGV4cG9ydEFzOiAndW5pVG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICd1bmktdG9hc3QnLFxuICAgICdbY2xhc3MuaW5mb10nOiAnb3B0aW9ucy50eXBlID09PSBcImluZm9cIicsXG4gICAgJ1tjbGFzcy5zdWNjZXNzXSc6ICdvcHRpb25zLnR5cGUgPT09IFwic3VjY2Vzc1wiJyxcbiAgICAnW2NsYXNzLndhcm5pbmddJzogJ29wdGlvbnMudHlwZSA9PT0gXCJ3YXJuaW5nXCInLFxuICAgICdbY2xhc3MuZGFuZ2VyXSc6ICdvcHRpb25zLnR5cGUgPT09IFwiZGFuZ2VyXCInLFxuICAgICdbY2xhc3MuZGlzbWlzc2FibGVdJzogJ2NvbmZpZy50YXBUb0Rpc21pc3MnLFxuICAgICcoY2xpY2spJzogJ29uQ2xpY2soKScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcmVhZG9ubHkgcHJvZ3Jlc3MkID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcblxuICBwcml2YXRlIF9pbnRlcnZhbDogTm9kZUpTLlRpbWVyO1xuICBwcml2YXRlIF90aW1lb3V0OiBOb2RlSlMuVGltZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpY2tzID0gMjU7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RvdGFsID0gMTAwO1xuXG4gIHByaXZhdGUgZ2V0IF90aWNrKCkge1xuICAgIHJldHVybiAodGhpcy5fdG90YWwgLyB0aGlzLm9wdGlvbnMuZHVyYXRpb24pICogdGhpcy5fdGlja3M7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVOSV9UT0FTVF9DT05GSUcpIHJlYWRvbmx5IGNvbmZpZzogSVVuaVRvYXN0Q29uZmlnLFxuICAgIEBJbmplY3QoVU5JX1RPQVNUX09QVElPTlMpIHJlYWRvbmx5IG9wdGlvbnM6IElVbmlUb2FzdE9wdGlvbnMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdG9hc3RSZWY6IFVuaVRvYXN0UmVmLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl90b2FzdFJlZi5kaXNtaXNzKCk7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24pO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcucHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzcyQubmV4dCh0aGlzLnByb2dyZXNzJC52YWx1ZSArIHRoaXMuX3RpY2spO1xuICAgICAgICB9LCB0aGlzLl90aWNrcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3RpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblxuICAgICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnRhcFRvRGlzbWlzcykge1xuICAgICAgdGhpcy5fdG9hc3RSZWYuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVuaS10b2FzdC1jb250ZW50XCI+XG4gIDxkaXYgKm5nSWY9XCJvcHRpb25zLnRpdGxlXCJcbiAgICAgICBjbGFzcz1cInVuaS10b2FzdC10aXRsZVwiPlxuICAgIHt7IG9wdGlvbnMudGl0bGUgfX1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ1bmktdG9hc3QtbWVzc2FnZVwiPlxuICAgIHt7IG9wdGlvbnMubWVzc2FnZSB9fVxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwidW5pLXRvYXN0LXByb2dyZXNzYmFyXCJcbiAgICAgKm5nSWY9XCJjb25maWcucHJvZ3Jlc3NCYXJcIlxuICAgICBbc3R5bGUud2lkdGguJV09XCJwcm9ncmVzcyQgfCBhc3luY1wiPlxuPC9kaXY+XG4iXX0=