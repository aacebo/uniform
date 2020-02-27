export declare function uniFormFieldProvider<T>(component: T): {
    provide: import("@angular/core").InjectionToken<import("@angular/forms").ControlValueAccessor>;
    useExisting: import("@angular/core").Type<any>;
    multi: boolean;
};
