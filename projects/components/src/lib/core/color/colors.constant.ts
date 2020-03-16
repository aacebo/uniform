import { UniColor } from './color.enum';

export const UNI_COLORS = {
  '[class.primary]': `color === "${ UniColor.Primary }"`,
  '[class.success]': `color === "${ UniColor.Success }"`,
  '[class.warning]': `color === "${ UniColor.Warning }"`,
  '[class.danger]': `color === "${ UniColor.Danger }"`,
};
