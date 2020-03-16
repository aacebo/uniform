import { UniColor } from './color.enum';

export function uniColors(color: UniColor) {
  return {
    primary: color === UniColor.Primary,
    success: color === UniColor.Success,
    warning: color === UniColor.Warning,
    danger: color === UniColor.Danger,
  };
}
