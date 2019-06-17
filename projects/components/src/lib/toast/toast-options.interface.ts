import { UniToastType } from './toast-type.enum';
import { UniToastPosition } from './toast-position.enum';

export interface IUniToastOptions {
  message: string;
  type: UniToastType;
  title?: string;
  position?: UniToastPosition;
  duration?: number;
  dismissable?: boolean;
  panelClass?: string;
}
