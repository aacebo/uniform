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
  ViewEncapsulation,
} from '@angular/core';
import { ConnectedPosition, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { mergeMap, startWith, takeUntil } from 'rxjs/operators';

import { UniOptionComponent } from '../../../core/option/option.component';
import { IUniOptionSelectedEvent } from '../../../core/option/option-selected-event.interface';
import { uniSubscribableMixin } from '../../../core/mixins/subscribable.mixin';

import { UniFormFieldControlBase } from '../../../form-field/form-field-control.base';
import { uniFormFieldProvider } from '../../../form-field/form-field-control.provider';

import { UniSelectPanelComponent } from '../select-panel/select-panel.component';

class UniSelectBase extends UniFormFieldControlBase<string> { }
const _UniSelectMixinBase = uniSubscribableMixin(UniSelectBase);

@Component({
  moduleId: module.id,
  selector: 'uni-select',
  exportAs: 'uniSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    class: 'uni-select',
    '[class.disabled]': 'disabled',
  },
  providers: [uniFormFieldProvider(UniSelectComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniSelectComponent extends _UniSelectMixinBase implements AfterContentInit, OnDestroy {
  @Input() panelClass = 'uni-select-panel';

  @ViewChild('trigger')
  readonly trigger: ElementRef<HTMLElement>;

  @ViewChild(UniSelectPanelComponent)
  readonly panel: UniSelectPanelComponent;

  @ViewChild(CdkConnectedOverlay)
  readonly overlay: CdkConnectedOverlay;

  @ContentChildren(UniOptionComponent, { descendants: true })
  get options() { return this._options; }
  set options(v: QueryList<UniOptionComponent>) {
    this._options = v;

    this.optionSelectionChanged = this.options.changes.pipe(
      startWith(this.options),
      mergeMap(() => merge<IUniOptionSelectedEvent>(...this.options.map(o => o.selectionChanged))),
    );

    this.optionSelectionChanged.pipe(takeUntil(this.destroy$))
                               .subscribe(e => {
      if (e.source.selected) {
        this.select(e.source);
      }

      if (this.opened$.value) {
        this.close();
      }
    });

    this.initOptions();
  }
  private _options: QueryList<UniOptionComponent>;

  selectionModel: SelectionModel<UniOptionComponent>;
  optionSelectionChanged: Observable<IUniOptionSelectedEvent>;
  readonly opened$ = new BehaviorSubject(false);
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
    },
  ];

  get selected() {
    return this.selectionModel.selected.map(v => v.content).join(', ');
  }

  get minWidth() {
    return this.trigger ? this.trigger.nativeElement.clientWidth : 0;
  }

  ngAfterContentInit() {
    this.selectionModel = new SelectionModel<UniOptionComponent>(false);

    this.opened$.pipe(takeUntil(this.destroy$)).subscribe(open => {
      this.uniFormField.focused = open;
    });

    this.uniFormField.clicked.pipe(takeUntil(this.destroy$)).subscribe(e => {
      e.preventDefault();
      e.stopImmediatePropagation();

      if (!this.opened$.value && !this.disabled) {
        this.toggle();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(value: string) {
    if (value !== this.value) {
      this.value = value;

      if (this.options) {
        this.initOptions();
      }
    }
  }

  toggle() {
    this.opened$.next(!this.opened$.value);
  }

  close() {
    this.opened$.next(false);
  }

  private select(v: UniOptionComponent) {
    const options = this.options.toArray();

    this.selectionModel.select(v);
    this.value = this.optionValue(v);

    for (const option of options) {
      if (option !== v) {
        option.deselect();
      }
    }
  }

  private initOptions() {
    for (const option of this.options.toArray()) {
      const value = this.optionValue(option);

      if (!option.color) {
        option.color = this.uniFormField.color;
      }

      if (value === this.value) {
        option.select();
      }
    }
  }

  private optionValue(v: UniOptionComponent) {
    return v.value || v.content;
  }
}
