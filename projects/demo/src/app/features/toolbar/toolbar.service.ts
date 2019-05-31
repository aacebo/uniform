import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

Injectable({ providedIn: 'root' })
export class ToolbarService {
  readonly $title = new BehaviorSubject('@uniform/components');
}
