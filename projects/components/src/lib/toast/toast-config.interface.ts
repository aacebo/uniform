import { UniToastType } from './toast-type.enum';

export interface IUniToastConfig {
  tapToDismiss?: boolean;
  progressBar?: boolean;
  icons?: {
    [UniToastType.Info]: string;
    [UniToastType.Success]: string;
    [UniToastType.Warning]: string;
    [UniToastType.Danger]: string;
  };
}
