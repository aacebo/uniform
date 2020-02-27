import { UniColor } from '../enums';
export declare const UNI_HOST_COLORS: {
    '[class.primary]': string;
    '[class.success]': string;
    '[class.warning]': string;
    '[class.danger]': string;
};
export declare function uniColors(color: UniColor): {
    primary: boolean;
    success: boolean;
    warning: boolean;
    danger: boolean;
};
