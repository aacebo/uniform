export interface IUniDialogOptions<T = any> {
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  disableClose?: boolean;
  hasBackdrop?: boolean;
  panelClass?: string;
  backdropClass?: string;
  data?: T;
}
