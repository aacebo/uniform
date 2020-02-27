import { Input, Directive } from '@angular/core';
import { UniPosition } from './position.enum';
import * as i0 from "@angular/core";
export class UniPositionBase {
    get isString() {
        return typeof this.content === 'string';
    }
}
UniPositionBase.ɵfac = function UniPositionBase_Factory(t) { return new (t || UniPositionBase)(); };
UniPositionBase.ɵdir = i0.ɵɵdefineDirective({ type: UniPositionBase, inputs: { content: "content", position: "position" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UniPositionBase, [{
        type: Directive
    }], null, { content: [{
            type: Input
        }], position: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tYmFzZS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1bmlmb3JtL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29yZS9wb3NpdGlvbi9wb3NpdGlvbi1iYXNlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHOUMsTUFBTSxPQUFPLGVBQWU7SUFJMUIsSUFBSSxRQUFRO1FBQ1YsT0FBTyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDO0lBQzFDLENBQUM7OzhFQU5VLGVBQWU7b0RBQWYsZUFBZTtrREFBZixlQUFlO2NBRDNCLFNBQVM7O2tCQUVQLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgVGVtcGxhdGVSZWYsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVbmlQb3NpdGlvbiB9IGZyb20gJy4vcG9zaXRpb24uZW51bSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIFVuaVBvc2l0aW9uQmFzZSB7XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBVbmlQb3NpdGlvbjtcblxuICBnZXQgaXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnO1xuICB9XG59XG4iXX0=