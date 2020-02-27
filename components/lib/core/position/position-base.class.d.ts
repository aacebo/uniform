import { TemplateRef } from '@angular/core';
import { UniPosition } from './position.enum';
import * as i0 from "@angular/core";
export declare class UniPositionBase {
    content: string | TemplateRef<any>;
    position: UniPosition;
    get isString(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<UniPositionBase>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<UniPositionBase, never, never, { "content": "content"; "position": "position"; }, {}, never>;
}
