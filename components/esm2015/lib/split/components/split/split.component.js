import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ContentChildren, QueryList, ContentChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { UniSubscriptionHelper } from '../../../core/helpers';
import { UniSplitAreaComponent } from '../area/split-area.component';
import { UniSplitHandleComponent } from '../handle/split-handle.component';
import { UniSplitDirection } from '../../enums/split-direction.enum';
import { areaPct } from '../../utils/area-pct/area-pct.util';
import * as i0 from "@angular/core";
const _c0 = [[["uni-split-area"]], [["uni-split-handle"]], [["uni-split-area"]], [["uni-split"]]];
const _c1 = ["uni-split-area", "uni-split-handle", "uni-split-area", "uni-split"];
export class UniSplitComponent extends UniSubscriptionHelper {
    constructor(_el) {
        super();
        this._el = _el;
        this._el.nativeElement.classList.add(this._name);
    }
    get areas() { return this._areas; }
    set areas(v) {
        if (v && v.length === 2) {
            this._areas = v;
            if (this._areas.first.index === undefined) {
                this._areas.first.index = 0;
            }
            if (this._areas.last.index === undefined) {
                this._areas.last.index = 2;
            }
        }
    }
    get handle() { return this._handle; }
    set handle(v) {
        if (v) {
            this._handle = v;
            this._handle.direction = this._vertical ? UniSplitDirection.Vertical :
                UniSplitDirection.Horizontal;
            this._handle.resize.pipe(takeUntil(this.destroy$)).subscribe(this._onResize.bind(this));
        }
    }
    get _name() {
        return this._el.nativeElement.nodeName.toLowerCase();
    }
    get _vertical() {
        return this._name === 'uni-vertical-split';
    }
    _onResize(distance) {
        if (this._areas) {
            let pct;
            if (this._vertical) {
                pct = areaPct(this._areas.first.clientWidth + distance, this._el.nativeElement.clientWidth);
            }
            else {
                pct = areaPct(this._areas.first.clientHeight + distance, this._el.nativeElement.clientHeight);
            }
            this._areas.first.flex = `0 0 ${pct <= 100 ? pct : 100}%`;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHVuaWZvcm0vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zcGxpdC9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmNvbXBvbmVudC50cyIsImxpYi9zcGxpdC9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFZN0QsTUFBTSxPQUFPLGlCQUFrQixTQUFRLHFCQUFxQjtJQXNDMUQsWUFBNkIsR0FBNEI7UUFDdkQsS0FBSyxFQUFFLENBQUM7UUFEbUIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFFdkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXhDRCxJQUNJLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25DLElBQUksS0FBSyxDQUFDLENBQW1DO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFN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QWU7bUJBQUMscUJBQXFCOztrQkFpQnJDLFlBQVk7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVW5pU3Vic2NyaXB0aW9uSGVscGVyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9oZWxwZXJzJztcblxuaW1wb3J0IHsgVW5pU3BsaXRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi4vYXJlYS9zcGxpdC1hcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVbmlTcGxpdEhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4uL2hhbmRsZS9zcGxpdC1oYW5kbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaVNwbGl0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vZW51bXMvc3BsaXQtZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgYXJlYVBjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2FyZWEtcGN0L2FyZWEtcGN0LnV0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgZXhwb3J0QXM6ICd1bmlTcGxpdCcsXG4gIHNlbGVjdG9yOiAndW5pLXZlcnRpY2FsLXNwbGl0LCB1bmktaG9yaXpvbnRhbC1zcGxpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGxpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwbGl0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICd1bmktc3BsaXQnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVbmlTcGxpdENvbXBvbmVudCBleHRlbmRzIFVuaVN1YnNjcmlwdGlvbkhlbHBlciB7XG4gIEBDb250ZW50Q2hpbGRyZW4oVW5pU3BsaXRBcmVhQ29tcG9uZW50KVxuICBnZXQgYXJlYXMoKSB7IHJldHVybiB0aGlzLl9hcmVhczsgfVxuICBzZXQgYXJlYXModjogUXVlcnlMaXN0PFVuaVNwbGl0QXJlYUNvbXBvbmVudD4pIHtcbiAgICBpZiAodiAmJiB2Lmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5fYXJlYXMgPSB2O1xuXG4gICAgICBpZiAodGhpcy5fYXJlYXMuZmlyc3QuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9hcmVhcy5maXJzdC5pbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9hcmVhcy5sYXN0LmluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fYXJlYXMubGFzdC5pbmRleCA9IDI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2FyZWFzOiBRdWVyeUxpc3Q8VW5pU3BsaXRBcmVhQ29tcG9uZW50PjtcblxuICBAQ29udGVudENoaWxkKFVuaVNwbGl0SGFuZGxlQ29tcG9uZW50KVxuICBnZXQgaGFuZGxlKCkgeyByZXR1cm4gdGhpcy5faGFuZGxlOyB9XG4gIHNldCBoYW5kbGUodjogVW5pU3BsaXRIYW5kbGVDb21wb25lbnQpIHtcbiAgICBpZiAodikge1xuICAgICAgdGhpcy5faGFuZGxlID0gdjtcbiAgICAgIHRoaXMuX2hhbmRsZS5kaXJlY3Rpb24gPSB0aGlzLl92ZXJ0aWNhbCA/IFVuaVNwbGl0RGlyZWN0aW9uLlZlcnRpY2FsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaVNwbGl0RGlyZWN0aW9uLkhvcml6b250YWw7XG4gICAgICB0aGlzLl9oYW5kbGUucmVzaXplLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodGhpcy5fb25SZXNpemUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2hhbmRsZTogVW5pU3BsaXRIYW5kbGVDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBnZXQgX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZSA9PT0gJ3VuaS12ZXJ0aWNhbC1zcGxpdCc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9uYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVzaXplKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fYXJlYXMpIHtcbiAgICAgIGxldCBwY3Q6IG51bWJlcjtcblxuICAgICAgaWYgKHRoaXMuX3ZlcnRpY2FsKSB7XG4gICAgICAgIHBjdCA9IGFyZWFQY3QodGhpcy5fYXJlYXMuZmlyc3QuY2xpZW50V2lkdGggKyBkaXN0YW5jZSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwY3QgPSBhcmVhUGN0KHRoaXMuX2FyZWFzLmZpcnN0LmNsaWVudEhlaWdodCArIGRpc3RhbmNlLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FyZWFzLmZpcnN0LmZsZXggPSBgMCAwICR7IHBjdCA8PSAxMDAgPyBwY3QgOiAxMDAgfSVgO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLXNwbGl0LWFyZWFcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJ1bmktc3BsaXQtaGFuZGxlXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwidW5pLXNwbGl0LWFyZWFcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJ1bmktc3BsaXRcIj48L25nLWNvbnRlbnQ+XG4iXX0=