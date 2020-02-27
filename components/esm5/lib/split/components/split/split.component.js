import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ContentChildren, QueryList, ContentChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { UniSubscriptionHelper } from '../../../core/helpers';
import { UniSplitAreaComponent } from '../area/split-area.component';
import { UniSplitHandleComponent } from '../handle/split-handle.component';
import { UniSplitDirection } from '../../enums/split-direction.enum';
import { areaPct } from '../../utils/area-pct/area-pct.util';
import * as i0 from "@angular/core";
var _c0 = [[["uni-split-area"]], [["uni-split-handle"]], [["uni-split-area"]], [["uni-split"]]];
var _c1 = ["uni-split-area", "uni-split-handle", "uni-split-area", "uni-split"];
var UniSplitComponent = /** @class */ (function (_super) {
    __extends(UniSplitComponent, _super);
    function UniSplitComponent(_el) {
        var _this = _super.call(this) || this;
        _this._el = _el;
        _this._el.nativeElement.classList.add(_this._name);
        return _this;
    }
    Object.defineProperty(UniSplitComponent.prototype, "areas", {
        get: function () { return this._areas; },
        set: function (v) {
            if (v && v.length === 2) {
                this._areas = v;
                if (this._areas.first.index === undefined) {
                    this._areas.first.index = 0;
                }
                if (this._areas.last.index === undefined) {
                    this._areas.last.index = 2;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitComponent.prototype, "handle", {
        get: function () { return this._handle; },
        set: function (v) {
            if (v) {
                this._handle = v;
                this._handle.direction = this._vertical ? UniSplitDirection.Vertical :
                    UniSplitDirection.Horizontal;
                this._handle.resize.pipe(takeUntil(this.destroy$)).subscribe(this._onResize.bind(this));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitComponent.prototype, "_name", {
        get: function () {
            return this._el.nativeElement.nodeName.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniSplitComponent.prototype, "_vertical", {
        get: function () {
            return this._name === 'uni-vertical-split';
        },
        enumerable: true,
        configurable: true
    });
    UniSplitComponent.prototype._onResize = function (distance) {
        if (this._areas) {
            var pct = void 0;
            if (this._vertical) {
                pct = areaPct(this._areas.first.clientWidth + distance, this._el.nativeElement.clientWidth);
            }
            else {
                pct = areaPct(this._areas.first.clientHeight + distance, this._el.nativeElement.clientHeight);
            }
            this._areas.first.flex = "0 0 " + (pct <= 100 ? pct : 100) + "%";
        }
    };
    UniSplitComponent.ɵfac = function UniSplitComponent_Factory(t) { return new (t || UniSplitComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    UniSplitComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSplitComponent, selectors: [["uni-vertical-split"], ["uni-horizontal-split"]], contentQueries: function UniSplitComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, UniSplitHandleComponent, true);
            i0.ɵɵcontentQuery(dirIndex, UniSplitAreaComponent, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handle = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.areas = _t);
        } }, hostAttrs: [1, "uni-split"], exportAs: ["uniSplit"], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 4, vars: 0, template: function UniSplitComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
            i0.ɵɵprojection(1, 1);
            i0.ɵɵprojection(2, 2);
            i0.ɵɵprojection(3, 3);
        } }, styles: [".uni-split{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto}.uni-split.uni-vertical-split{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.uni-split.uni-horizontal-split{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}"], encapsulation: 2, changeDetection: 0 });
    return UniSplitComponent;
}(UniSubscriptionHelper));
export { UniSplitComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSplitComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                exportAs: 'uniSplit',
                selector: 'uni-vertical-split, uni-horizontal-split',
                templateUrl: './split.component.html',
                styleUrls: ['./split.component.scss'],
                host: { class: 'uni-split' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { areas: [{
            type: ContentChildren,
            args: [UniSplitAreaComponent]
        }], handle: [{
            type: ContentChild,
            args: [UniSplitHandleComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zcGxpdC9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmNvbXBvbmVudC50cyIsImxpYi9zcGxpdC9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBRTdEO0lBVXVDLHFDQUFxQjtJQXNDMUQsMkJBQTZCLEdBQTRCO1FBQXpELFlBQ0UsaUJBQU8sU0FFUjtRQUg0QixTQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUV2RCxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFDbkQsQ0FBQztJQXhDRCxzQkFDSSxvQ0FBSzthQURULGNBQ2MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuQyxVQUFVLENBQW1DO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFF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QUssRUFBRSxXQUFXLEVBQUU7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7a0JBRUUsZUFBZTttQkFBQyxxQkFBcUI7O2tCQWlCckMsWUFBWTttQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBVbmlTdWJzY3JpcHRpb25IZWxwZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyBVbmlTcGxpdEFyZWFDb21wb25lbnQgfSBmcm9tICcuLi9hcmVhL3NwbGl0LWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVNwbGl0SGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi4vaGFuZGxlL3NwbGl0LWhhbmRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pU3BsaXREaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9lbnVtcy9zcGxpdC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBhcmVhUGN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXJlYS1wY3QvYXJlYS1wY3QudXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBleHBvcnRBczogJ3VuaVNwbGl0JyxcbiAgc2VsZWN0b3I6ICd1bmktdmVydGljYWwtc3BsaXQsIHVuaS1ob3Jpem9udGFsLXNwbGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwbGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3BsaXQuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDogeyBjbGFzczogJ3VuaS1zcGxpdCcgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaVNwbGl0Q29tcG9uZW50IGV4dGVuZHMgVW5pU3Vic2NyaXB0aW9uSGVscGVyIHtcbiAgQENvbnRlbnRDaGlsZHJlbihVbmlTcGxpdEFyZWFDb21wb25lbnQpXG4gIGdldCBhcmVhcygpIHsgcmV0dXJuIHRoaXMuX2FyZWFzOyB9XG4gIHNldCBhcmVhcyh2OiBRdWVyeUxpc3Q8VW5pU3BsaXRBcmVhQ29tcG9uZW50Pikge1xuICAgIGlmICh2ICYmIHYubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLl9hcmVhcyA9IHY7XG5cbiAgICAgIGlmICh0aGlzLl9hcmVhcy5maXJzdC5pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2FyZWFzLmZpcnN0LmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2FyZWFzLmxhc3QuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9hcmVhcy5sYXN0LmluZGV4ID0gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfYXJlYXM6IFF1ZXJ5TGlzdDxVbmlTcGxpdEFyZWFDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGQoVW5pU3BsaXRIYW5kbGVDb21wb25lbnQpXG4gIGdldCBoYW5kbGUoKSB7IHJldHVybiB0aGlzLl9oYW5kbGU7IH1cbiAgc2V0IGhhbmRsZSh2OiBVbmlTcGxpdEhhbmRsZUNvbXBvbmVudCkge1xuICAgIGlmICh2KSB7XG4gICAgICB0aGlzLl9oYW5kbGUgPSB2O1xuICAgICAgdGhpcy5faGFuZGxlLmRpcmVjdGlvbiA9IHRoaXMuX3ZlcnRpY2FsID8gVW5pU3BsaXREaXJlY3Rpb24uVmVydGljYWwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVW5pU3BsaXREaXJlY3Rpb24uSG9yaXpvbnRhbDtcbiAgICAgIHRoaXMuX2hhbmRsZS5yZXNpemUucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfaGFuZGxlOiBVbmlTcGxpdEhhbmRsZUNvbXBvbmVudDtcblxuICBwcml2YXRlIGdldCBfbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lID09PSAndW5pLXZlcnRpY2FsLXNwbGl0JztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX25hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZXNpemUoZGlzdGFuY2U6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9hcmVhcykge1xuICAgICAgbGV0IHBjdDogbnVtYmVyO1xuXG4gICAgICBpZiAodGhpcy5fdmVydGljYWwpIHtcbiAgICAgICAgcGN0ID0gYXJlYVBjdCh0aGlzLl9hcmVhcy5maXJzdC5jbGllbnRXaWR0aCArIGRpc3RhbmNlLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBjdCA9IGFyZWFQY3QodGhpcy5fYXJlYXMuZmlyc3QuY2xpZW50SGVpZ2h0ICsgZGlzdGFuY2UsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYXJlYXMuZmlyc3QuZmxleCA9IGAwIDAgJHsgcGN0IDw9IDEwMCA/IHBjdCA6IDEwMCB9JWA7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudCBzZWxlY3Q9XCJ1bmktc3BsaXQtYXJlYVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cInVuaS1zcGxpdC1oYW5kbGVcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJ1bmktc3BsaXQtYXJlYVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cInVuaS1zcGxpdFwiPjwvbmctY29udGVudD5cbiJdfQ==