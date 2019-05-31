import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ToolbarService } from './features/toolbar';

@Injectable()
export class AppRoutingResolver implements Resolve<void> {
  constructor(private readonly toolbarService: ToolbarService) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.toolbarService.$title.next(`@uniform/components/${route.routeConfig.path}`);
  }
}
