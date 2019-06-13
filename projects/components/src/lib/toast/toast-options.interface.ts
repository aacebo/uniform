import { UniToastType } from './toast-type.enum';
import { UniToastPosition } from './toast-position.enum';

export interface IUniToastOptions {
  message: string;
  title?: string;
  type?: UniToastType;
  position?: UniToastPosition;
  duration?: number;
  dismissable?: boolean;
  panelClass?: string;
}
