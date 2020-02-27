import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { UniIconService } from './icon.service';
import * as i0 from "@angular/core";
import * as i1 from "./icon.service";
export class UniIconComponent {
    constructor(_el, _iconService) {
        this._el = _el;
        this._iconService = _iconService;
    }
    get icon() { return this._icon; }
    set icon(v) {
        if (v !== this._icon) {
            if (v && this._el.nativeElement.classList.contains(this._icon)) {
                this._el.nativeElement.classList.remove(this._icon);
            }
            this._icon = v;
            this._el.nativeElement.classList.add(v);
        }
    }
    ngOnInit() {
        this._el.nativeElement.classList.add(this._iconService.prefix);
    }
}
UniIconComponent.ɵfac = function UniIconComponent_Factory(t) { return new (t || UniIconComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.UniIconService)); };
UniIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniIconComponent, selectors: [["uni-icon"]], hostAttrs: [1, "uni-icon"], inputs: { icon: "icon" }, exportAs: ["uniIcon"], decls: 0, vars: 0, template: function UniIconComponent_Template(rf, ctx) { }, styles: [".uni-icon{display:inline-block}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniIconComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-icon',
                exportAs: 'uniIcon',
                template: ``,
                styleUrls: ['./icon.component.scss'],
                host: { class: 'uni-icon' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.UniIconService }]; }, { icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBWWhELE1BQU0sT0FBTyxnQkFBZ0I7SUFlM0IsWUFDbUIsR0FBNEIsRUFDNUIsWUFBNEI7UUFENUIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQzNDLENBQUM7SUFqQkwsSUFDSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksQ0FBQyxDQUFTO1FBQ2hCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JEO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQVFELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Z0ZBdEJVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FWNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsRUFBRTtnQkFDWixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDcEMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pSWNvblNlcnZpY2UgfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3VuaS1pY29uJyxcbiAgZXhwb3J0QXM6ICd1bmlJY29uJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICd1bmktaWNvbicgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVuaUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZXQgaWNvbigpIHsgcmV0dXJuIHRoaXMuX2ljb247IH1cbiAgc2V0IGljb24odjogc3RyaW5nKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX2ljb24pIHtcbiAgICAgIGlmICh2ICYmIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuX2ljb24pKSB7XG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pY29uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faWNvbiA9IHY7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodik7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWNvblNlcnZpY2U6IFVuaUljb25TZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pY29uU2VydmljZS5wcmVmaXgpO1xuICB9XG59XG4iXX0=