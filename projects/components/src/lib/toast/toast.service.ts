import { Injectable, Inject } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, ComponentType } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';

import { IUniToast } from './toast.interface';
import { IUniToastOptions } from './toast-options.interface';
import { IUniToastConfig } from './toast-config.interface';
import { UniToastPosition } from './toast-position.enum';
import { UniToastComponent } from './toast.component';
import { UNI_TOAST_OPTIONS } from './toast-options.constant';
import { UNI_TOAST_CONFIG } from './toast-config.constant';
import { UniToastRef } from './toast-ref.class';

@Injectable()
export class UniToastService {
  private _index = -1;
  private readonly _toasts: IUniToast[] = [];

  get toasts() {
    return this._toasts;
  }

  private get _id() {
    this._index++;
    return this._index;
  }

  constructor(
    @Inject(UNI_TOAST_CONFIG) private readonly _config: IUniToastConfig,
    private readonly _overlay: Overlay
  ) {}

  open(options: IUniToastOptions) {
    return this._create(UniToastComponent, options);
  }

  create<T>(component: ComponentType<T>, options: IUniToastOptions) {
    return this._create(component, options);
  }

  remove(id: number) {
    for (let i = 0; i < this._toasts.length; i++) {
      if (this._toasts[i].id === id) {
        this._toasts.splice(i, 1);
        return i;
      }
    }

    return -1;
  }

  find<T = any>(id: number): IUniToast<T> {
    return this._toasts.find(t => t.id === id);
  }

  private _create<T>(component: ComponentType<T>, options: IUniToastOptions): IUniToast<T> {
    const overlayRef = this._overlay.create({
      panelClass: options.panelClass,
      positionStrategy: this._getPositionStrategy(options.position)
    });

    const toastRef = new UniToastRef(overlayRef);
    const portal = new ComponentPortal(component, null, this._getInjector(toastRef, options));
    const instance = overlayRef.attach(portal).instance;
    const toast: IUniToast<T> = {
      id: this._id,
      type: options.type,
      component: instance,
      ref: toastRef
    };

    toastRef.closed.pipe(take(1)).subscribe(() => this.remove(toast.id));
    this._toasts.unshift(toast);

    return toast;
  }

  private _getInjector(ref: UniToastRef, options: IUniToastOptions) {
    const tokens = new WeakMap();

    tokens.set(UniToastRef, ref);
    tokens.set(UNI_TOAST_OPTIONS, options);
    tokens.set(UNI_TOAST_CONFIG, this._config);

    return new PortalInjector(null, tokens);
  }

  private _getPositionStrategy(position = UniToastPosition.TopRight) {
    const pb = this._overlay.position().global();

    if (position === UniToastPosition.TopLeft) {
      return pb.top(this._config.margin).left(this._config.margin);
    } else if (position === UniToastPosition.TopRight) {
      return pb.top(this._config.margin).right(this._config.margin);
    } else if (position === UniToastPosition.BottomLeft) {
      return pb.bottom(this._config.margin).left(this._config.margin);
    }

    return pb.bottom(this._config.margin).right(this._config.margin);
  }
}
