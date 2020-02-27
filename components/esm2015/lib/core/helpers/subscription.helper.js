import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class UniSubscriptionHelper {
    constructor() {
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
UniSubscriptionHelper.ɵfac = function UniSubscriptionHelper_Factory(t) { return new (t || UniSubscriptionHelper)(); };
UniSubscriptionHelper.ɵdir = i0.ɵɵdefineDirective({ type: UniSubscriptionHelper });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29yZS9oZWxwZXJzL3N1YnNjcmlwdGlvbi5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0IsTUFBTSxPQUFPLHFCQUFxQjtJQUFsQztRQUNXLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0tBTXpDO0lBSkMsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzswRkFOVSxxQkFBcUI7MERBQXJCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgVW5pU3Vic2NyaXB0aW9uSGVscGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19