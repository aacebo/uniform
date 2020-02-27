import { Component, ChangeDetectionStrategy, ViewContainerRef, Inject, ComponentFactoryResolver, ViewChild, } from '@angular/core';
import { UNI_DIALOG_CONTENT } from '../../dialog-content.constant';
import * as i0 from "@angular/core";
const _c0 = ["vc"];
export class UniDialogContainerComponent {
    constructor(_content, _resolver) {
        this._content = _content;
        this._resolver = _resolver;
    }
    ngAfterViewInit() {
        const factory = this._resolver.resolveComponentFactory(this._content);
        this.vc.clear();
        const ref = this.vc.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}
UniDialogContainerComponent.ɵfac = function UniDialogContainerComponent_Factory(t) { return new (t || UniDialogContainerComponent)(i0.ɵɵdirectiveInject(UNI_DIALOG_CONTENT), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
UniDialogContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniDialogContainerComponent, selectors: [["uni-dialog-container"]], viewQuery: function UniDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vc = _t.first);
    } }, hostAttrs: [1, "uni-dialog-container"], exportAs: ["uniDialogContainer"], decls: 2, vars: 0, consts: [["vc", ""]], template: function UniDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, null, 0);
    } }, styles: ["[_nghost-%COMP%]{display:block;width:100%;height:100%;background-color:var(--white);border-radius:10px;box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniDialogContainerComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-dialog-container',
                exportAs: 'uniDialogContainer',
                templateUrl: './dialog-container.component.html',
                styleUrls: ['./dialog-container.component.scss'],
                host: {
                    class: 'uni-dialog-container',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [UNI_DIALOG_CONTENT]
            }] }, { type: i0.ComponentFactoryResolver }]; }, { vc: [{
            type: ViewChild,
            args: ['vc', { read: ViewContainerRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9jb21wb25lbnRzL2RpYWxvZy1jb250YWluZXIvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJsaWIvZGlhbG9nL2NvbXBvbmVudHMvZGlhbG9nLWNvbnRhaW5lci9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sd0JBQXdCLEVBQ3hCLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBYW5FLE1BQU0sT0FBTywyQkFBMkI7SUFHdEMsWUFDK0MsUUFBYSxFQUN6QyxTQUFtQztRQURQLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDekMsY0FBUyxHQUFULFNBQVMsQ0FBMEI7SUFDbkQsQ0FBQztJQUVKLGVBQWU7UUFDYixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDOztzR0FiVSwyQkFBMkIsdUJBSTVCLGtCQUFrQjtnRUFKakIsMkJBQTJCO2tDQUNiLGdCQUFnQjs7Ozs7UUN2QjNDLGlDQUFpQzs7a0REc0JwQiwyQkFBMkI7Y0FYdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2hELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsc0JBQXNCO2lCQUM5QjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBS0ksTUFBTTt1QkFBQyxrQkFBa0I7O2tCQUgzQixTQUFTO21CQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEluamVjdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVU5JX0RJQUxPR19DT05URU5UIH0gZnJvbSAnLi4vLi4vZGlhbG9nLWNvbnRlbnQuY29uc3RhbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktZGlhbG9nLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAndW5pRGlhbG9nQ29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ3VuaS1kaWFsb2ctY29udGFpbmVyJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFVuaURpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCd2YycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2YzogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVOSV9ESUFMT0dfQ09OVEVOVCkgcHJpdmF0ZSByZWFkb25seSBfY29udGVudDogYW55LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Jlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX3Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuX2NvbnRlbnQpO1xuICAgIHRoaXMudmMuY2xlYXIoKTtcbiAgICBjb25zdCByZWYgPSB0aGlzLnZjLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICByZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICN2Yz48L25nLWNvbnRhaW5lcj5cbiJdfQ==