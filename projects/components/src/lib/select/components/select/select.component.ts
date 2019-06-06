import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConnectedPosition, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { mergeMap, startWith, takeUntil } from 'rxjs/operators';

import { UniFormFieldControlBase } from '../../../form-field';
import { IUniOptionSelectedEvent } from '../../interfaces/option-selected-event.interface';
import { UniOptionComponent } from '../option/option.component';
import { UniSelectPanelComponent } from '../select-panel/select-panel.component';

@Component({
  moduleId: module.id,
  selector: 'uni-select',
  exportAs: 'uniSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UniSelectComponent),
      multi: true
    }
  ],
  host: {
    class: 'uni-select'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSelectComponent extends UniFormFieldControlBase<string | string[]> implements AfterContentInit, OnDestroy {
  @Input() panelClass = 'uni-select-panel';
  @Input() multiple = false;

  @ViewChild('trigger', { static: false }) trigger: ElementRef<HTMLElement>;
  @ViewChild(UniSelectPanelComponent, { static: false }) panel: UniSelectPanelComponent;
  @ViewChild(CdkConnectedOverlay, { static: false }) overlay: CdkConnectedOverlay;
  @ContentChildren(UniOptionComponent, { descendants: true }) options: QueryList<UniOptionComponent>;

  private readonly _destroy = new Subject<void>();

  selectionModel: SelectionModel<UniOptionComponent>;
  optionSelectionChanged: Observable<IUniOptionSelectedEvent>;
  readonly opened = new BehaviorSubject(false);
  readonly positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom',
    }
  ];

  get selected() {
    return this.selectionModel.selected.map(v => v.content).join(', ');
  }

  get minWidth() {
    return this.trigger ? this.trigger.nativeElement.clientWidth : 0;
  }

  ngAfterContentInit() {
    for (const option of this.options.toArray()) {
      const value = option.value || option.content;

      if (this.multiple && Array.isArray(this.value)) {
        if (this.value.indexOf(value) > -1) {
          option.select();
        }
      } else {
        if (value === this.value) {
          option.select();
        }
      }
    }

    this.selectionModel = new SelectionModel<UniOptionComponent>(
      this.multiple,
      this.options.filter(o => o.selected)
    );

    this.optionSelectionChanged = this.options.changes.pipe(
      startWith(this.options),
      mergeMap(() => merge<IUniOptionSelectedEvent>(...this.options.map(o => o.selectionChanged)))
    );

    this.optionSelectionChanged.pipe(takeUntil(this._destroy))
                               .subscribe(e => {
      this.writeValue(e.source);

      if (!this.multiple && this.opened.value) {
        this.close();
      }
    });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }

  toggle() {
    this.opened.next(!this.opened.value);
  }

  close() {
    this.opened.next(false);
  }

  writeValue(v: UniOptionComponent | UniOptionComponent[]) {
    if (v && this.optionValue(v) !== this.value) {
      this.select(v);
    }
  }

  private select(v: UniOptionComponent | UniOptionComponent[]) {
    if (Array.isArray(v)) {
      this.selectionModel.clear();

      for (const value of v) {
        this.selectionModel.select(value);
      }
    } else {
      this.selectionModel.select(v);
    }

    this.value = this.optionValue(v);
  }

  private optionValue(v: UniOptionComponent | UniOptionComponent[]) {
    return Array.isArray(v) ? v.map(o => o.value || o.content) : (v.value || v.content);
  }
}
