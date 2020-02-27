import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniCardComponent } from './components/card/card.component';
import { UniCardFooterComponent } from './components/card-footer/card-footer.component';
import { UniCardHeaderComponent } from './components/card-header/card-header.component';
import { UniCardSubtitleComponent } from './components/card-subtitle/card-subtitle.component';
import { UniCardTitleComponent } from './components/card-title/card-title.component';
import { UniCardContentComponent } from './components/card-content/card-content.component';
import { UniCardAvatarDirective } from './directives/card-avatar/card-avatar.directive';
import * as i0 from "@angular/core";
const declarations = [
    UniCardComponent,
    UniCardFooterComponent,
    UniCardHeaderComponent,
    UniCardSubtitleComponent,
    UniCardTitleComponent,
    UniCardContentComponent,
    UniCardAvatarDirective,
];
export class UniCardModule {
}
UniCardModule.ɵmod = i0.ɵɵdefineNgModule({ type: UniCardModule });
UniCardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UniCardModule_Factory(t) { return new (t || UniCardModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UniCardModule, { declarations: [UniCardComponent,
        UniCardFooterComponent,
        UniCardHeaderComponent,
        UniCardSubtitleComponent,
        UniCardTitleComponent,
        UniCardContentComponent,
        UniCardAvatarDirective], imports: [CommonModule], exports: [UniCardComponent,
        UniCardFooterComponent,
        UniCardHeaderComponent,
        UniCardSubtitleComponent,
        UniCardTitleComponent,
        UniCardContentComponent,
        UniCardAvatarDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniCardModule, [{
        type: NgModule,
        args: [{
                declarations,
                exports: declarations,
                imports: [CommonModule],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdW5pZm9ybS9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhcmQvY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBRXhGLE1BQU0sWUFBWSxHQUFHO0lBQ25CLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtDQUN2QixDQUFDO0FBT0YsTUFBTSxPQUFPLGFBQWE7O2lEQUFiLGFBQWE7eUdBQWIsYUFBYSxrQkFGZixDQUFDLFlBQVksQ0FBQzt3RkFFWixhQUFhLG1CQWR4QixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixzQkFBc0IsYUFNWixZQUFZLGFBWnRCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtrREFRWCxhQUFhO2NBTHpCLFFBQVE7ZUFBQztnQkFDUixZQUFZO2dCQUNaLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVW5pQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaUNhcmRGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC1mb290ZXIvY2FyZC1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaUNhcmRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC1oZWFkZXIvY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaUNhcmRTdWJ0aXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLXN1YnRpdGxlL2NhcmQtc3VidGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaUNhcmRUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLXRpdGxlL2NhcmQtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaUNhcmRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQtY29udGVudC9jYXJkLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVuaUNhcmRBdmF0YXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2FyZC1hdmF0YXIvY2FyZC1hdmF0YXIuZGlyZWN0aXZlJztcblxuY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICBVbmlDYXJkQ29tcG9uZW50LFxuICBVbmlDYXJkRm9vdGVyQ29tcG9uZW50LFxuICBVbmlDYXJkSGVhZGVyQ29tcG9uZW50LFxuICBVbmlDYXJkU3VidGl0bGVDb21wb25lbnQsXG4gIFVuaUNhcmRUaXRsZUNvbXBvbmVudCxcbiAgVW5pQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gIFVuaUNhcmRBdmF0YXJEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMsXG4gIGV4cG9ydHM6IGRlY2xhcmF0aW9ucyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVuaUNhcmRNb2R1bGUgeyB9XG4iXX0=