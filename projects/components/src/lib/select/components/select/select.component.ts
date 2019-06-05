import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  ContentChildren,
  QueryList,
  OnInit,
  AfterContentInit
} from '@angular/core';
import { ConnectedPosition, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';

import { UniFormFieldControlBase } from '../../../form-field';
import { UniOptionComponent } from '../option/option.component';
import { UniSelectPanelComponent } from '../select-panel/select-panel.component';

@Component({
  moduleId: module.id,
  selector: 'uni-select',
  exportAs: 'uniSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    class: 'uni-select'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniSelectComponent extends UniFormFieldControlBase implements OnInit, AfterContentInit {
  @Input() panelClass = 'uni-select-panel';
  @Input() multiple = false;

  @ViewChild('trigger', { static: false }) trigger: ElementRef<HTMLElement>;
  @ViewChild(UniSelectPanelComponent, { static: false }) panel: UniSelectPanelComponent;
  @ViewChild(CdkConnectedOverlay, { static: false }) overlay: CdkConnectedOverlay;
  @ContentChildren(UniOptionComponent, { descendants: true }) options: QueryList<UniOptionComponent>;

  selectionModel: SelectionModel<UniOptionComponent>;
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

  get minWidth() {
    return this.trigger ? this.trigger.nativeElement.clientWidth : 0;
  }

  ngOnInit() {
    this.selectionModel = new SelectionModel<UniOptionComponent>(this.multiple);
  }

  ngAfterContentInit() {
    this.selectionModel.changed.subscribe(e => {
      e.added.forEach(o => o.select());
      e.removed.forEach(o => o.deselect());
    });
  }

  toggle() {
    this.opened.next(!this.opened.value);
  }

  close() {
    this.opened.next(false);
  }

  writeValue(v: any | any[]) {
    if (v) {
      this.select(v);
    }
  }

  private select(v: any | any[]) {
    if (this.multiple && Array.isArray(v)) {
      this.selectionModel.clear();

      for (const value of v) {
        this.selectionModel.select(value);
      }
    } else {
      const option = this.getOptionByValue(v);

      if (option) {
        this.selectionModel.select(option);
      }
    }
  }

  private getOptionByValue(value: any) {
    return this.options.find(o => o.value === value);
  }
}
