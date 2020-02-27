import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, SecurityContext, ElementRef, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import marked from 'marked';
import hljs from 'highlight.js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const _c0 = ["*"];
export class UniMarkedComponent {
    constructor(_cdr, _sanitizer, _el) {
        this._cdr = _cdr;
        this._sanitizer = _sanitizer;
        this._el = _el;
        this._options = {
            silent: true,
            smartLists: true,
            gfm: true,
            breaks: true,
            highlight: null,
        };
    }
    get markdown() { return this._markdown; }
    set markdown(v) {
        this._markdown = v;
        this.html = marked(v || '', this._options);
    }
    get highlight() { return this._highlight; }
    set highlight(v) {
        if (v !== this._highlight) {
            this._highlight = coerceBooleanProperty(v);
            this._options.highlight = this._highlight ? this._highlightCodeBlock.bind(this) : null;
            this._cdr.markForCheck();
        }
    }
    get sanitize() { return this._sanitize; }
    set sanitize(v) {
        if (v !== this._sanitize) {
            this._sanitize = coerceBooleanProperty(v);
            this._cdr.markForCheck();
        }
    }
    get html() { return this._html; }
    set html(v) {
        this._html = this._sanitize ? this._sanitizer.sanitize(SecurityContext.HTML, v) : v;
        this._el.nativeElement.innerHTML = this._html;
        this._cdr.markForCheck();
    }
    _highlightCodeBlock(code) {
        return hljs.highlightAuto(code).value;
    }
}
UniMarkedComponent.ɵfac = function UniMarkedComponent_Factory(t) { return new (t || UniMarkedComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef)); };
UniMarkedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniMarkedComponent, selectors: [["uni-marked"]], hostAttrs: [1, "uni-marked"], inputs: { markdown: "markdown", highlight: "highlight", sanitize: "sanitize" }, exportAs: ["uniMarked"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function UniMarkedComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".uni-marked{display:block}.uni-marked code{color:var(--blood-orange)}.uni-marked table{border-spacing:0;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}.uni-marked table td,.uni-marked table th{padding:10px}.uni-marked table thead tr{background-color:var(--darker)}.uni-marked table thead tr th{text-align:left;color:var(--white);font-weight:500}.uni-marked table thead tr th:first-child{border-top-left-radius:3px}.uni-marked table thead tr th:last-child{border-top-right-radius:3px}.uni-marked table tbody tr{background-color:var(--dark)}.uni-marked table tbody tr:last-child td:first-child{border-bottom-left-radius:3px}.uni-marked table tbody tr:last-child td:last-child{border-bottom-right-radius:3px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniMarkedComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-marked',
                exportAs: 'uniMarked',
                template: `<ng-content></ng-content>`,
                styleUrls: ['./marked.component.scss'],
                host: { class: 'uni-marked' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }, { type: i0.ElementRef }]; }, { markdown: [{
            type: Input
        }], highlight: [{
            type: Input
        }], sanitize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbWFya2VkL21hcmtlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsVUFBVSxFQUNWLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sSUFBSSxNQUFNLGNBQWMsQ0FBQzs7OztBQVloQyxNQUFNLE9BQU8sa0JBQWtCO0lBOEM3QixZQUNtQixJQUF1QixFQUN2QixVQUF3QixFQUN4QixHQUE0QjtRQUY1QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBQ3hCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBWHZDLGFBQVEsR0FBeUI7WUFDdkMsTUFBTSxFQUFFLElBQUk7WUFDWixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUUsSUFBSTtZQUNULE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQztJQU1FLENBQUM7SUFqREwsSUFDSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLFFBQVEsQ0FBQyxDQUFTO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxJQUNJLFNBQVMsS0FBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksU0FBUyxDQUFDLENBQVU7UUFDdEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUdELElBQ0ksUUFBUSxLQUFLLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekMsSUFBSSxRQUFRLENBQUMsQ0FBVTtRQUNyQixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFHRCxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLElBQUksSUFBSSxDQUFDLENBQVM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBaUJPLG1CQUFtQixDQUFDLElBQVk7UUFDdEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOztvRkF0RFUsa0JBQWtCO3VEQUFsQixrQkFBa0I7O1FBTmxCLGtCQUFZOztrREFNWixrQkFBa0I7Y0FWOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtnQkFDN0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLOztrQkFRTCxLQUFLOztrQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTZWN1cml0eUNvbnRleHQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAndW5pLW1hcmtlZCcsXG4gIGV4cG9ydEFzOiAndW5pTWFya2VkJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vbWFya2VkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICd1bmktbWFya2VkJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pTWFya2VkQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZ2V0IG1hcmtkb3duKCkgeyByZXR1cm4gdGhpcy5fbWFya2Rvd247IH1cbiAgc2V0IG1hcmtkb3duKHY6IHN0cmluZykge1xuICAgIHRoaXMuX21hcmtkb3duID0gdjtcbiAgICB0aGlzLmh0bWwgPSBtYXJrZWQodiB8fCAnJywgdGhpcy5fb3B0aW9ucyk7XG4gIH1cbiAgcHJpdmF0ZSBfbWFya2Rvd246IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgaGlnaGxpZ2h0KCkgeyByZXR1cm4gdGhpcy5faGlnaGxpZ2h0OyB9XG4gIHNldCBoaWdobGlnaHQodjogYm9vbGVhbikge1xuICAgIGlmICh2ICE9PSB0aGlzLl9oaWdobGlnaHQpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICAgIHRoaXMuX29wdGlvbnMuaGlnaGxpZ2h0ID0gdGhpcy5faGlnaGxpZ2h0ID8gdGhpcy5faGlnaGxpZ2h0Q29kZUJsb2NrLmJpbmQodGhpcykgOiBudWxsO1xuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9oaWdobGlnaHQ/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzYW5pdGl6ZSgpIHsgcmV0dXJuIHRoaXMuX3Nhbml0aXplOyB9XG4gIHNldCBzYW5pdGl6ZSh2OiBib29sZWFuKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX3Nhbml0aXplKSB7XG4gICAgICB0aGlzLl9zYW5pdGl6ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2FuaXRpemU/OiBib29sZWFuO1xuXG4gIGdldCBodG1sKCkgeyByZXR1cm4gdGhpcy5faHRtbDsgfVxuICBzZXQgaHRtbCh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9odG1sID0gdGhpcy5fc2FuaXRpemUgPyB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIHYpIDogdjtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2h0bWw7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIHByaXZhdGUgX2h0bWw/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogbWFya2VkLk1hcmtlZE9wdGlvbnMgPSB7XG4gICAgc2lsZW50OiB0cnVlLFxuICAgIHNtYXJ0TGlzdHM6IHRydWUsXG4gICAgZ2ZtOiB0cnVlLFxuICAgIGJyZWFrczogdHJ1ZSxcbiAgICBoaWdobGlnaHQ6IG51bGwsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0Q29kZUJsb2NrKGNvZGU6IHN0cmluZykge1xuICAgIHJldHVybiBobGpzLmhpZ2hsaWdodEF1dG8oY29kZSkudmFsdWU7XG4gIH1cbn1cbiJdfQ==