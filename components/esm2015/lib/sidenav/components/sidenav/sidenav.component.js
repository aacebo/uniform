import { Component, ChangeDetectionStrategy, Input, ElementRef, HostListener, Output, EventEmitter, ChangeDetectorRef, ViewEncapsulation, ContentChild, ViewContainerRef, ViewChild, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniSidenavPosition } from '../../enums/sidenav-position.enum';
import { UniSidenavMode } from '../../enums/sidenav-mode.enum';
import { UniSidenavState } from '../../enums/sidenav-state.enum';
import { UNI_SIDENAV_ANIMATIONS } from '../../sidenav.animations';
import { UniSidenavBodyDirective } from '../../directives/sidenav-body/sidenav-body.directive';
import * as i0 from "@angular/core";
const _c0 = ["view"];
export class UniSidenavComponent {
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this._position = UniSidenavPosition.Start;
        this._mode = UniSidenavMode.Side;
        this._closeOnBackdropClick = true;
        this._hasBackdrop = true;
        this.openChange = new EventEmitter();
        this.stateChange = new EventEmitter();
        this.modeChange = new EventEmitter();
        this.positionChange = new EventEmitter();
        this.UniSidenavPosition = UniSidenavPosition;
        this.UniSidenavMode = UniSidenavMode;
        this.UniSidenavState = UniSidenavState;
    }
    get position() { return this._position; }
    set position(v) {
        if (v !== this._position) {
            this._position = v;
            this.positionChange.emit(this._position);
            this.cdr.markForCheck();
        }
    }
    get mode() { return this._mode; }
    set mode(v) {
        if (v !== this._mode) {
            this._mode = v;
            this.modeChange.emit(this._mode);
            this.cdr.markForCheck();
        }
    }
    get open() { return this._open; }
    set open(v) {
        if (v !== this._open) {
            this._open = coerceBooleanProperty(v);
            this.state = this.open ? UniSidenavState.Opening : UniSidenavState.Closing;
            this.openChange.emit(this._open);
            this.cdr.markForCheck();
        }
    }
    get closeOnBackdropClick() { return this._closeOnBackdropClick; }
    set closeOnBackdropClick(v) {
        if (v !== this._closeOnBackdropClick) {
            this._closeOnBackdropClick = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        }
    }
    get hasBackdrop() { return this._hasBackdrop; }
    set hasBackdrop(v) {
        if (v !== this._hasBackdrop) {
            this._hasBackdrop = coerceBooleanProperty(v);
            this.cdr.markForCheck();
        }
    }
    get slide() {
        return {
            value: this.open,
            params: {
                distance: this.position === UniSidenavPosition.Start ? '-100' : '100',
            },
        };
    }
    get state() { return this._state; }
    set state(v) {
        if (v !== this._state) {
            const prev = this._state;
            this._state = v;
            if (this.view) {
                if (prev === UniSidenavState.Closed && this._state === UniSidenavState.Opening) {
                    this.view.createEmbeddedView(this.body.template);
                }
                else if (this._state === UniSidenavState.Closed) {
                    this.view.remove();
                }
            }
            this.stateChange.emit(v);
            this.cdr.markForCheck();
        }
    }
    ngAfterViewInit() {
        if (this.open) {
            this.view.createEmbeddedView(this.body.template);
        }
    }
    ngAfterContentInit() {
        setTimeout(() => this.cdr.markForCheck());
    }
    onEscape() {
        if (this.mode === UniSidenavMode.Over) {
            this.open = false;
        }
    }
    onSlideEnd() {
        this.state = this.open ? UniSidenavState.Opened : UniSidenavState.Closed;
    }
}
UniSidenavComponent.ɵfac = function UniSidenavComponent_Factory(t) { return new (t || UniSidenavComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
UniSidenavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UniSidenavComponent, selectors: [["uni-sidenav"]], contentQueries: function UniSidenavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, UniSidenavBodyDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.body = _t.first);
    } }, viewQuery: function UniSidenavComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.view = _t.first);
    } }, hostAttrs: [1, "uni-sidenav"], hostVars: 7, hostBindings: function UniSidenavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵcomponentHostSyntheticListener("@slideTransition.done", function UniSidenavComponent_animation_slideTransition_done_HostBindingHandler($event) { return ctx.onSlideEnd(); });
        i0.ɵɵlistener("keydown.escape", function UniSidenavComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscape(); }, false, i0.ɵɵresolveDocument);
    } if (rf & 2) {
        i0.ɵɵupdateSyntheticHostBinding("@slideTransition", ctx.slide);
        i0.ɵɵclassProp("over", ctx.mode === ctx.UniSidenavMode.Over)("end", ctx.position === ctx.UniSidenavPosition.End)("closed", ctx.open === false);
    } }, inputs: { position: "position", mode: "mode", open: "open", closeOnBackdropClick: "closeOnBackdropClick", hasBackdrop: "hasBackdrop" }, outputs: { openChange: "openChange", stateChange: "stateChange", modeChange: "modeChange", positionChange: "positionChange" }, exportAs: ["uniSidenav"], decls: 2, vars: 0, consts: [["view", ""]], template: function UniSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, null, 0);
    } }, styles: [".uni-sidenav{display:block;position:absolute;height:100%;overflow-y:auto;z-index:2;background-color:var(--dark);color:var(--white)}.uni-sidenav.end{right:0}.uni-sidenav.over{z-index:3}"], encapsulation: 2, data: { animation: [
            UNI_SIDENAV_ANIMATIONS.slideTransition,
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniSidenavComponent, [{
        type: Component,
        args: [{
                moduleId: module.id,
                selector: 'uni-sidenav',
                exportAs: 'uniSidenav',
                template: `<ng-container #view></ng-container>`,
                styleUrls: ['./sidenav.component.scss'],
                animations: [
                    UNI_SIDENAV_ANIMATIONS.slideTransition,
                ],
                host: {
                    class: 'uni-sidenav',
                    '[class.over]': 'mode === UniSidenavMode.Over',
                    '[class.end]': 'position === UniSidenavPosition.End',
                    '[class.closed]': 'open === false',
                    '[@slideTransition]': 'slide',
                    '(@slideTransition.done)': 'onSlideEnd()',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { position: [{
            type: Input
        }], mode: [{
            type: Input
        }], open: [{
            type: Input
        }], closeOnBackdropClick: [{
            type: Input
        }], hasBackdrop: [{
            type: Input
        }], openChange: [{
            type: Output
        }], stateChange: [{
            type: Output
        }], modeChange: [{
            type: Output
        }], positionChange: [{
            type: Output
        }], body: [{
            type: ContentChild,
            args: [UniSidenavBodyDirective]
        }], view: [{
            type: ViewChild,
            args: ['view', { read: ViewContainerRef }]
        }], onEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3NpZGVuYXYvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixZQUFZLEVBRVosZ0JBQWdCLEVBQ2hCLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7QUFzQi9GLE1BQU0sT0FBTyxtQkFBbUI7SUFtRzlCLFlBQ1csRUFBMkIsRUFDM0IsR0FBc0I7UUFEdEIsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEzRnpCLGNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7UUFXckMsVUFBSyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFzQjVCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQVU3QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLElBQUks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RUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O2tCQW1ENUMsWUFBWTttQkFBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBVbmlTaWRlbmF2UG9zaXRpb24gfSBmcm9tICcuLi8uLi9lbnVtcy9zaWRlbmF2LXBvc2l0aW9uLmVudW0nO1xuaW1wb3J0IHsgVW5pU2lkZW5hdk1vZGUgfSBmcm9tICcuLi8uLi9lbnVtcy9zaWRlbmF2LW1vZGUuZW51bSc7XG5pbXBvcnQgeyBVbmlTaWRlbmF2U3RhdGUgfSBmcm9tICcuLi8uLi9lbnVtcy9zaWRlbmF2LXN0YXRlLmVudW0nO1xuaW1wb3J0IHsgVU5JX1NJREVOQVZfQU5JTUFUSU9OUyB9IGZyb20gJy4uLy4uL3NpZGVuYXYuYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBVbmlTaWRlbmF2Qm9keURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2lkZW5hdi1ib2R5L3NpZGVuYXYtYm9keS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICd1bmktc2lkZW5hdicsXG4gIGV4cG9ydEFzOiAndW5pU2lkZW5hdicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAjdmlldz48L25nLWNvbnRhaW5lcj5gLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICBVTklfU0lERU5BVl9BTklNQVRJT05TLnNsaWRlVHJhbnNpdGlvbixcbiAgXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndW5pLXNpZGVuYXYnLFxuICAgICdbY2xhc3Mub3Zlcl0nOiAnbW9kZSA9PT0gVW5pU2lkZW5hdk1vZGUuT3ZlcicsXG4gICAgJ1tjbGFzcy5lbmRdJzogJ3Bvc2l0aW9uID09PSBVbmlTaWRlbmF2UG9zaXRpb24uRW5kJyxcbiAgICAnW2NsYXNzLmNsb3NlZF0nOiAnb3BlbiA9PT0gZmFsc2UnLFxuICAgICdbQHNsaWRlVHJhbnNpdGlvbl0nOiAnc2xpZGUnLFxuICAgICcoQHNsaWRlVHJhbnNpdGlvbi5kb25lKSc6ICdvblNsaWRlRW5kKCknLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pU2lkZW5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKVxuICBnZXQgcG9zaXRpb24oKSB7IHJldHVybiB0aGlzLl9wb3NpdGlvbjsgfVxuICBzZXQgcG9zaXRpb24odjogVW5pU2lkZW5hdlBvc2l0aW9uKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX3Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHY7XG4gICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5fcG9zaXRpb24pO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Bvc2l0aW9uID0gVW5pU2lkZW5hdlBvc2l0aW9uLlN0YXJ0O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBtb2RlKCkgeyByZXR1cm4gdGhpcy5fbW9kZTsgfVxuICBzZXQgbW9kZSh2OiBVbmlTaWRlbmF2TW9kZSkge1xuICAgIGlmICh2ICE9PSB0aGlzLl9tb2RlKSB7XG4gICAgICB0aGlzLl9tb2RlID0gdjtcbiAgICAgIHRoaXMubW9kZUNoYW5nZS5lbWl0KHRoaXMuX21vZGUpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX21vZGUgPSBVbmlTaWRlbmF2TW9kZS5TaWRlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvcGVuKCkgeyByZXR1cm4gdGhpcy5fb3BlbjsgfVxuICBzZXQgb3Blbih2OiBib29sZWFuKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX29wZW4pIHtcbiAgICAgIHRoaXMuX29wZW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5vcGVuID8gVW5pU2lkZW5hdlN0YXRlLk9wZW5pbmcgOiBVbmlTaWRlbmF2U3RhdGUuQ2xvc2luZztcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMuX29wZW4pO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX29wZW4/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjbG9zZU9uQmFja2Ryb3BDbGljaygpIHsgcmV0dXJuIHRoaXMuX2Nsb3NlT25CYWNrZHJvcENsaWNrOyB9XG4gIHNldCBjbG9zZU9uQmFja2Ryb3BDbGljayh2OiBib29sZWFuKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX2Nsb3NlT25CYWNrZHJvcENsaWNrKSB7XG4gICAgICB0aGlzLl9jbG9zZU9uQmFja2Ryb3BDbGljayA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9jbG9zZU9uQmFja2Ryb3BDbGljayA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhhc0JhY2tkcm9wKCkgeyByZXR1cm4gdGhpcy5faGFzQmFja2Ryb3A7IH1cbiAgc2V0IGhhc0JhY2tkcm9wKHY6IGJvb2xlYW4pIHtcbiAgICBpZiAodiAhPT0gdGhpcy5faGFzQmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2hhc0JhY2tkcm9wID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVbmlTaWRlbmF2U3RhdGU+KCk7XG4gIEBPdXRwdXQoKSBtb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVbmlTaWRlbmF2TW9kZT4oKTtcbiAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxVbmlTaWRlbmF2UG9zaXRpb24+KCk7XG5cbiAgQENvbnRlbnRDaGlsZChVbmlTaWRlbmF2Qm9keURpcmVjdGl2ZSlcbiAgcmVhZG9ubHkgYm9keTogVW5pU2lkZW5hdkJvZHlEaXJlY3RpdmU7XG5cbiAgQFZpZXdDaGlsZCgndmlldycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICByZWFkb25seSB2aWV3OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGdldCBzbGlkZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRoaXMub3BlbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBkaXN0YW5jZTogdGhpcy5wb3NpdGlvbiA9PT0gVW5pU2lkZW5hdlBvc2l0aW9uLlN0YXJ0ID8gJy0xMDAnIDogJzEwMCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBnZXQgc3RhdGUoKSB7IHJldHVybiB0aGlzLl9zdGF0ZTsgfVxuICBzZXQgc3RhdGUodjogVW5pU2lkZW5hdlN0YXRlKSB7XG4gICAgaWYgKHYgIT09IHRoaXMuX3N0YXRlKSB7XG4gICAgICBjb25zdCBwcmV2ID0gdGhpcy5fc3RhdGU7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHY7XG5cbiAgICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IFVuaVNpZGVuYXZTdGF0ZS5DbG9zZWQgJiYgdGhpcy5fc3RhdGUgPT09IFVuaVNpZGVuYXZTdGF0ZS5PcGVuaW5nKSB7XG4gICAgICAgICAgdGhpcy52aWV3LmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmJvZHkudGVtcGxhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBVbmlTaWRlbmF2U3RhdGUuQ2xvc2VkKSB7XG4gICAgICAgICAgdGhpcy52aWV3LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2UuZW1pdCh2KTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zdGF0ZT86IFVuaVNpZGVuYXZTdGF0ZTtcblxuICByZWFkb25seSBVbmlTaWRlbmF2UG9zaXRpb24gPSBVbmlTaWRlbmF2UG9zaXRpb247XG4gIHJlYWRvbmx5IFVuaVNpZGVuYXZNb2RlID0gVW5pU2lkZW5hdk1vZGU7XG4gIHJlYWRvbmx5IFVuaVNpZGVuYXZTdGF0ZSA9IFVuaVNpZGVuYXZTdGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgdGhpcy52aWV3LmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmJvZHkudGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uZXNjYXBlJylcbiAgb25Fc2NhcGUoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gVW5pU2lkZW5hdk1vZGUuT3Zlcikge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25TbGlkZUVuZCgpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5vcGVuID8gVW5pU2lkZW5hdlN0YXRlLk9wZW5lZCA6IFVuaVNpZGVuYXZTdGF0ZS5DbG9zZWQ7XG4gIH1cbn1cbiJdfQ==