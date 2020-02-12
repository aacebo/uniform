import { UniColor } from '../core/enums';

import { UniProgressMode } from './enums/progress-mode.enum';

export interface IUniProgress {
  mode: UniProgressMode;
  color: UniColor;
  value: number;
  total: number;
}
