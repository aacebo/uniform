import { Injectable, Inject } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, ComponentType } from '@angular/cdk/portal';

import { IUniToastOptions } from './toast-options.interface';
import { IUniToastConfig } from './toast-config.interface';
import { UniToastPosition } from './toast-position.enum';
import { UniToastComponent } from './toast.component';
import { UNI_TOAST_OPTIONS } from './toast-options.constant';
import { UNI_TOAST_CONFIG } from './toast-config.constant';
import { UniToastOverlayRef } from './toast-overlay-ref.class';

@Injectable()
export class UniToastService {
  private readonly _margin = '10px';

  constructor(
    @Inject(UNI_TOAST_CONFIG) private readonly _config: IUniToastConfig,
    private readonly _overlay: Overlay,
  ) {}

  open(options: IUniToastOptions) {
    return this._open(UniToastComponent, options);
  }

  create<T>(component: ComponentType<T>, options: IUniToastOptions) {
    return this._open(component, options);
  }

  private _open<T>(component: ComponentType<T>, options: IUniToastOptions) {
    const overlayRef = this._overlay.create({
      panelClass: options.panelClass,
      positionStrategy: this._getPositionStrategy(options.position)
    });

    const toastRef = new UniToastOverlayRef(overlayRef);
    const portal = new ComponentPortal(component, null, this._getInjector(toastRef, options));
    return overlayRef.attach(portal).instance;
  }

  private _getInjector(ref: UniToastOverlayRef, options: IUniToastOptions) {
    const tokens = new WeakMap();

    tokens.set(UniToastOverlayRef, ref);
    tokens.set(UNI_TOAST_OPTIONS, options);
    tokens.set(UNI_TOAST_CONFIG, this._config);

    return new PortalInjector(null, tokens);
  }

  private _getPositionStrategy(position = UniToastPosition.TopRight) {
    const pb = this._overlay.position().global();

    if (position === UniToastPosition.TopLeft) {
      return pb.top(this._margin).left(this._margin);
    } else if (position === UniToastPosition.TopRight) {
      return pb.top(this._margin).right(this._margin);
    } else if (position === UniToastPosition.BottomLeft) {
      return pb.bottom(this._margin).left(this._margin);
    }

    return pb.bottom(this._margin).right(this._margin);
  }
}
