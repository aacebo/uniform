import { UniColor } from '../enums/color.enum';

export const UNI_HOST_COLORS = {
  '[class.primary]': `color === "${ UniColor.Primary }"`,
  '[class.success]': `color === "${ UniColor.Success }"`,
  '[class.warning]': `color === "${ UniColor.Warning }"`,
  '[class.danger]': `color === "${ UniColor.Danger }"`,
};

export function uniColors(color: UniColor) {
  return {
    primary: color === UniColor.Primary,
    success: color === UniColor.Success,
    warning: color === UniColor.Warning,
    danger: color === UniColor.Danger,
  };
}
