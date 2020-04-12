import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { IUniJsonTreeNode } from './json-tree-node.interface';
import { uniParseJsonTreeNodes } from './parse-json-tree-nodes.util';
import { IJsonTreeNodeExpanded } from './json-tree-node-expanded.interface';

@Component({
  moduleId: module.id,
  exportAs: 'uniJsonTree',
  selector: 'uni-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss'],
  host: { class: 'uni-json-tree' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UniJsonTreeComponent implements OnInit {
  @Input()
  get json() { return this._json; }
  set json(v: any) {
    this._json = v;
    this._nodes = v !== undefined ? uniParseJsonTreeNodes(v) : [];
    this._cdr.markForCheck();
  }
  private _json?: any;

  @Input()
  get expanded() { return this._expanded; }
  set expanded(v: boolean) {
    this._expanded = coerceBooleanProperty(v);
    this._cdr.markForCheck();
  }
  private _expanded?: boolean;

  @Input()
  get state() { return this._state; }
  set state(v) {
    this._state = v;
    this._cdr.markForCheck();
  }
  private _state: { [key: string]: IJsonTreeNodeExpanded } = { };

  @Output() propertyValueClick = new EventEmitter<IUniJsonTreeNode>();

  get nodes() { return this._nodes; }
  private _nodes: IUniJsonTreeNode[] = [];

  constructor(private readonly _cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (this._json !== undefined && !this.nodes.length) {
      this._nodes = uniParseJsonTreeNodes(this._json);
    }

    this._generateState();
  }

  toggle(e: Event, node: IUniJsonTreeNode) {
    if (node.expandable) {
      e.stopImmediatePropagation();
      e.preventDefault();
      this.state[node.key].expanded = !this.state[node.key].expanded;
    }
  }

  private _generateState() {
    for (const node of this._nodes) {
      if (!this.state[node.key]) {
        this.state[node.key] = {
          expanded: this._expanded,
          state: { },
        };
      }
    }
  }
}
