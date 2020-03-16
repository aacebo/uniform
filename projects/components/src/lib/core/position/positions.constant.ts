import { UniPosition } from './position.enum';

export const UNI_POSITIONS = {
  '[class.top]': `position === "${ UniPosition.Top }"`,
  '[class.bottom]': `position === "${ UniPosition.Bottom }"`,
  '[class.left]': `position === "${ UniPosition.Left }"`,
  '[class.right]': `position === "${ UniPosition.Right }"`,
  '[class.bottom-left]': `position === "${ UniPosition.BottomLeft }"`,
  '[class.bottom-right]': `position === "${ UniPosition.BottomRight }"`,
  '[class.top-left]': `position === "${ UniPosition.TopLeft }"`,
  '[class.top-right]': `position === "${ UniPosition.TopRight }"`,
};
