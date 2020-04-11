import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { IUniJsonTreeNode } from './json-tree-node.interface';
import { uniParseJsonTreeNodes } from './parse-json-tree-nodes.util';

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

    if (v !== undefined) {
      this.nodes = uniParseJsonTreeNodes(v);
    } else {
      this.nodes = [];
    }
  }
  private _json?: any;

  @Input()
  get expanded() { return this._expanded; }
  set expanded(v: boolean) {
    this._expanded = coerceBooleanProperty(v);
  }
  private _expanded?: boolean;

  @Output() propertyValueClick = new EventEmitter<IUniJsonTreeNode>();

  nodes: IUniJsonTreeNode[] = [];
  readonly state: { [key: string]: boolean | undefined } = { };

  ngOnInit() {
    if (this._json !== undefined && !this.nodes.length) {
      this.nodes = uniParseJsonTreeNodes(this._json);
    }
  }

  toggle(e: Event, node: IUniJsonTreeNode) {
    if (node.expandable) {
      e.stopImmediatePropagation();
      e.preventDefault();
      this.state[node.key] = !this.state[node.key];
    }
  }
}
