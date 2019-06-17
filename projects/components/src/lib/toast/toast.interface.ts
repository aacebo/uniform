import { UniToastRef } from './toast-ref.class';
import { UniToastType } from './toast-type.enum';

export interface IUniToast<T = any> {
  id: number;
  type: UniToastType;
  component: T;
  ref: UniToastRef;
}
