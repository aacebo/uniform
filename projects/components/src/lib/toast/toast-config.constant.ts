import { InjectionToken } from '@angular/core';

import { IUniToastConfig } from './toast-config.interface';
import { UniToastType } from './toast-type.enum';

export const UNI_TOAST_CONFIG = new InjectionToken<IUniToastConfig>('UNI_TOAST_CONFIG');

export const UNI_TOAST_DEFAULT_CONFIG: IUniToastConfig = {
  tapToDismiss: true,
  icons: {
    [UniToastType.Info]: 'mdi mdi-information-outline',
    [UniToastType.Success]: 'mdi mdi-check',
    [UniToastType.Warning]: 'mdi mdi-alert-outline',
    [UniToastType.Danger]: 'mdi mdi-alert-circle-outline'
  }
};
