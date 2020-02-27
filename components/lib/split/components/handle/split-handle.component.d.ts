import { EventEmitter } from '@angular/core';
import { UniSplitDirection } from '../../enums/split-direction.enum';
import * as i0 from "@angular/core";
export declare class UniSplitHandleComponent {
    resize: EventEmitter<number>;
    direction?: UniSplitDirection;
    get resizing(): boolean;
    get vertical(): boolean;
    private _x?;
    private _y?;
    onMouseDown(e: MouseEvent): void;
    onMouseMove(e: MouseEvent): void;
    onMouseUp(): void;
    static ɵfac: i0.ɵɵFactoryDef<UniSplitHandleComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UniSplitHandleComponent, "uni-split-handle", ["uniSplitHandle"], {}, { "resize": "resize"; }, never>;
}
