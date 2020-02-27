import { Component, ChangeDetectionStrategy, ContentChild, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { UniSubscriptionHelper } from '../../../core/helpers';
import { UniSidenavComponent } from '../sidenav/sidenav.component';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function UniSidenavContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function UniSidenavContainerComponent_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onBackdropClick(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("visible", ctx_r22.showBackdrop);
} }
const _c0 = [[["uni-sidenav"]], [["uni-sidenav-content"]]];
const _c1 = ["uni-sidenav", "uni-sidenav-content"];
export class UniSidenavContainerComponent extends UniSubscriptionHelper {
    constructor(_cdr) {
        super();
        this._cdr = _cdr;
        this.backdropClicked = new EventEmitter();
    }
    get showBackdrop() {
        return this.sidenav.mode === UniSidenavMode.Over &&
            this.sidenav.open &&
            this.sidenav.hasBackdrop;
    }
    get hasBackdrop() {
        return this.sidenav.mode === UniSidenavMode.Over &&
            this.sidenav.hasBackdrop;
    }
    ngAfterContentInit() {
        this.sidenav.openChange.pipe(takeUntil(this.destroy$)).subscribe(() => this._cdr.markForCheck());
        this.sidenav.modeChange.pipe(takeUntil(this.destroy$)).subscribe(() => this._cdr.markForCheck());
        this.sidenav.positionChange.pipe(takeUntil(this.destroy$)).subscribe(() => this._cdr.markForCheck());
    }
    onBackdropClick() {
        this.backdropClicked.emit();
        if (this.sidenav.closeOnBackdropClick) {
            this.sidenav.open = !this.sidenav.open;
        }
    }
}
UniSidenavContainerComponent.ɵfac = function UniSidenavContainerComponent_Factory(t) { return new (t || UniSidenavContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
UniSidenavContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSidenavContainerComponent, selectors: [["uni-sidenav-container"]], contentQueries: function UniSidenavContainerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, UniSidenavComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
    } }, hostAttrs: [1, "uni-sidenav-container"], outputs: { backdropClicked: "backdropClicked" }, exportAs: ["uniSidenavContainer"], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 3, vars: 1, consts: [["class", "uni-backdrop", 3, "visible", "click", 4, "ngIf"], [1, "uni-backdrop", 3, "click"]], template: function UniSidenavContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, UniSidenavContainerComponent_div_0_Template, 1, 2, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵprojection(2, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasBackdrop);
    } }, directives: [i1.NgIf], styles: [".uni-backdrop{position:absolute;height:100%;width:100%;opacity:0;pointer-events:none;z-index:2;background-color:rgba(0,0,0,.8);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.uni-backdrop.visible{opacity:1;pointer-events:all}.uni-sidenav-container{display:block;position:relative;overflow:hidden}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSidenavContainerComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-sidenav-container',
                exportAs: 'uniSidenavContainer',
                templateUrl: './sidenav-container.component.html',
                styleUrls: ['./sidenav-container.component.scss'],
                host: { class: 'uni-sidenav-container' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { backdropClicked: [{
            type: Output
        }], sidenav: [{
            type: ContentChild,
            args: [UniSidenavComponent, { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zaWRlbmF2L2NvbXBvbmVudHMvc2lkZW5hdi1jb250YWluZXIvc2lkZW5hdi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibGliL3NpZGVuYXYvY29tcG9uZW50cy9zaWRlbmF2LWNvbnRhaW5lci9zaWRlbmF2LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFFakIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0lDZi9ELDhCQUlNO0lBREQsMk1BQTJCO0lBQ2hDLGlCQUFNOzs7SUFGRCwrQ0FBOEI7Ozs7QUR5Qm5DLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxxQkFBcUI7SUFpQnJFLFlBQTZCLElBQXVCO1FBQUksS0FBSyxFQUFFLENBQUM7UUFBbkMsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFoQjFDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWdCWSxDQUFDO0lBWGxFLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLElBQUk7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxJQUFJO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFJRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7d0dBL0JVLDRCQUE0QjtpRUFBNUIsNEJBQTRCO29DQUd6QixtQkFBbUI7Ozs7OztRQzlCbkMsNkVBSUE7UUFFQSxrQkFBaUM7UUFDakMscUJBQXlDOztRQU5wQyxzQ0FBbUI7O2tERDBCWCw0QkFBNEI7Y0FWeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtnQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxNQUFNOztrQkFFTixZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFVuaVN1YnNjcmlwdGlvbkhlbHBlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaGVscGVycyc7XG5cbmltcG9ydCB7IFVuaVNpZGVuYXZDb21wb25lbnQgfSBmcm9tICcuLi9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVNpZGVuYXZNb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2lkZW5hdi1tb2RlLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktc2lkZW5hdi1jb250YWluZXInLFxuICBleHBvcnRBczogJ3VuaVNpZGVuYXZDb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZW5hdi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlbmF2LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7IGNsYXNzOiAndW5pLXNpZGVuYXYtY29udGFpbmVyJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU2lkZW5hdkNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFVuaVN1YnNjcmlwdGlvbkhlbHBlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAT3V0cHV0KCkgYmFja2Ryb3BDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBDb250ZW50Q2hpbGQoVW5pU2lkZW5hdkNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHJlYWRvbmx5IHNpZGVuYXY6IFVuaVNpZGVuYXZDb21wb25lbnQ7XG5cbiAgZ2V0IHNob3dCYWNrZHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2Lm1vZGUgPT09IFVuaVNpZGVuYXZNb2RlLk92ZXIgJiZcbiAgICAgICAgICAgdGhpcy5zaWRlbmF2Lm9wZW4gJiZcbiAgICAgICAgICAgdGhpcy5zaWRlbmF2Lmhhc0JhY2tkcm9wO1xuICB9XG5cbiAgZ2V0IGhhc0JhY2tkcm9wKCkge1xuICAgIHJldHVybiB0aGlzLnNpZGVuYXYubW9kZSA9PT0gVW5pU2lkZW5hdk1vZGUuT3ZlciAmJlxuICAgICAgICAgICB0aGlzLnNpZGVuYXYuaGFzQmFja2Ryb3A7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IHN1cGVyKCk7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zaWRlbmF2Lm9wZW5DaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpO1xuICAgIHRoaXMuc2lkZW5hdi5tb2RlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgICB0aGlzLnNpZGVuYXYucG9zaXRpb25DaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgb25CYWNrZHJvcENsaWNrKCkge1xuICAgIHRoaXMuYmFja2Ryb3BDbGlja2VkLmVtaXQoKTtcblxuICAgIGlmICh0aGlzLnNpZGVuYXYuY2xvc2VPbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIHRoaXMuc2lkZW5hdi5vcGVuID0gIXRoaXMuc2lkZW5hdi5vcGVuO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVuaS1iYWNrZHJvcFwiXG4gICAgICpuZ0lmPVwiaGFzQmFja2Ryb3BcIlxuICAgICBbY2xhc3MudmlzaWJsZV09XCJzaG93QmFja2Ryb3BcIlxuICAgICAoY2xpY2spPVwib25CYWNrZHJvcENsaWNrKClcIj5cbjwvZGl2PlxuXG48bmctY29udGVudCBzZWxlY3Q9XCJ1bmktc2lkZW5hdlwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cInVuaS1zaWRlbmF2LWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4iXX0=