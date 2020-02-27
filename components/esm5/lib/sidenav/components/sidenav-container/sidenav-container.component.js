import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { UniSubscriptionHelper } from '../../../core/helpers';
import { UniSidenavComponent } from '../sidenav/sidenav.component';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function UniSidenavContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function UniSidenavContainerComponent_div_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r49); var ctx_r48 = i0.ɵɵnextContext(); return ctx_r48.onBackdropClick(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r47 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("visible", ctx_r47.showBackdrop);
} }
var _c0 = [[["uni-sidenav"]], [["uni-sidenav-content"]]];
var _c1 = ["uni-sidenav", "uni-sidenav-content"];
var UniSidenavContainerComponent = /** @class */ (function (_super) {
    __extends(UniSidenavContainerComponent, _super);
    function UniSidenavContainerComponent(_cdr) {
        var _this = _super.call(this) || this;
        _this._cdr = _cdr;
        _this.backdropClicked = new EventEmitter();
        return _this;
    }
    Object.defineProperty(UniSidenavContainerComponent.prototype, "showBackdrop", {
        get: function () {
            return this.sidenav.mode === UniSidenavMode.Over &&
                this.sidenav.open &&
                this.sidenav.hasBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSidenavContainerComponent.prototype, "hasBackdrop", {
        get: function () {
            return this.sidenav.mode === UniSidenavMode.Over &&
                this.sidenav.hasBackdrop;
        },
        enumerable: true,
        configurable: true
    });
    UniSidenavContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.sidenav.openChange.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this._cdr.markForCheck(); });
        this.sidenav.modeChange.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this._cdr.markForCheck(); });
        this.sidenav.positionChange.pipe(takeUntil(this.destroy$)).subscribe(function () { return _this._cdr.markForCheck(); });
    };
    UniSidenavContainerComponent.prototype.onBackdropClick = function () {
        this.backdropClicked.emit();
        if (this.sidenav.closeOnBackdropClick) {
            this.sidenav.open = !this.sidenav.open;
        }
    };
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
    return UniSidenavContainerComponent;
}(UniSubscriptionHelper));
export { UniSidenavContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zaWRlbmF2L2NvbXBvbmVudHMvc2lkZW5hdi1jb250YWluZXIvc2lkZW5hdi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibGliL3NpZGVuYXYvY29tcG9uZW50cy9zaWRlbmF2LWNvbnRhaW5lci9zaWRlbmF2LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBRWpCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztJQ2YvRCw4QkFJTTtJQURELHlNQUEyQjtJQUNoQyxpQkFBTTs7O0lBRkQsK0NBQThCOzs7O0FEZW5DO0lBVWtELGdEQUFxQjtJQWlCckUsc0NBQTZCLElBQXVCO1FBQXBELFlBQXdELGlCQUFPLFNBQUc7UUFBckMsVUFBSSxHQUFKLElBQUksQ0FBbUI7UUFoQjFDLHFCQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzs7SUFnQlksQ0FBQztJQVhsRSxzQkFBSSxzREFBWTthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxREFBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFJRCx5REFBa0IsR0FBbEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRCxzREFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUN4QztJQUNILENBQUM7NEdBL0JVLDRCQUE0QjtxRUFBNUIsNEJBQTRCO3dDQUd6QixtQkFBbUI7Ozs7OztZQzlCbkMsNkVBSUE7WUFFQSxrQkFBaUM7WUFDakMscUJBQXlDOztZQU5wQyxzQ0FBbUI7O3VDRER4QjtDQTJEQyxBQTFDRCxDQVVrRCxxQkFBcUIsR0FnQ3RFO1NBaENZLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBVnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsTUFBTTs7a0JBRU4sWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb250ZW50Q2hpbGQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBVbmlTdWJzY3JpcHRpb25IZWxwZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyBVbmlTaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTaWRlbmF2TW9kZSB9IGZyb20gJy4uLy4uL2VudW1zL3NpZGVuYXYtbW9kZS5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLXNpZGVuYXYtY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICd1bmlTaWRlbmF2Q29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGVuYXYtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZW5hdi1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDogeyBjbGFzczogJ3VuaS1zaWRlbmF2LWNvbnRhaW5lcicgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVNpZGVuYXZDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBVbmlTdWJzY3JpcHRpb25IZWxwZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQE91dHB1dCgpIGJhY2tkcm9wQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAQ29udGVudENoaWxkKFVuaVNpZGVuYXZDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICByZWFkb25seSBzaWRlbmF2OiBVbmlTaWRlbmF2Q29tcG9uZW50O1xuXG4gIGdldCBzaG93QmFja2Ryb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi5tb2RlID09PSBVbmlTaWRlbmF2TW9kZS5PdmVyICYmXG4gICAgICAgICAgIHRoaXMuc2lkZW5hdi5vcGVuICYmXG4gICAgICAgICAgIHRoaXMuc2lkZW5hdi5oYXNCYWNrZHJvcDtcbiAgfVxuXG4gIGdldCBoYXNCYWNrZHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2Lm1vZGUgPT09IFVuaVNpZGVuYXZNb2RlLk92ZXIgJiZcbiAgICAgICAgICAgdGhpcy5zaWRlbmF2Lmhhc0JhY2tkcm9wO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyBzdXBlcigpOyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2lkZW5hdi5vcGVuQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgICB0aGlzLnNpZGVuYXYubW9kZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKSk7XG4gICAgdGhpcy5zaWRlbmF2LnBvc2l0aW9uQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG9uQmFja2Ryb3BDbGljaygpIHtcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tlZC5lbWl0KCk7XG5cbiAgICBpZiAodGhpcy5zaWRlbmF2LmNsb3NlT25CYWNrZHJvcENsaWNrKSB7XG4gICAgICB0aGlzLnNpZGVuYXYub3BlbiA9ICF0aGlzLnNpZGVuYXYub3BlbjtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ1bmktYmFja2Ryb3BcIlxuICAgICAqbmdJZj1cImhhc0JhY2tkcm9wXCJcbiAgICAgW2NsYXNzLnZpc2libGVdPVwic2hvd0JhY2tkcm9wXCJcbiAgICAgKGNsaWNrKT1cIm9uQmFja2Ryb3BDbGljaygpXCI+XG48L2Rpdj5cblxuPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLXNpZGVuYXZcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJ1bmktc2lkZW5hdi1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuIl19