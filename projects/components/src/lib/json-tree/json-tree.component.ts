import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { UniJsonTreeNodeType } from './json-tree-node-type.enum';
import { IUniJsonTreeNode } from './json-tree-node.interface';

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
      this.render();
    } else {
      this.nodes = [];
    }
  }
  private _json: any;

  @Input()
  get expanded() { return this._expanded; }
  set expanded(v: boolean) {
    this._expanded = coerceBooleanProperty(v);
  }
  private _expanded?: boolean;

  @Input()
  get deep() { return this._deep; }
  set deep(v: boolean) {
    this._deep = coerceBooleanProperty(v);
  }
  private _deep?: boolean;

  @Output() propertyValueClicked = new EventEmitter<IUniJsonTreeNode>();

  nodes: IUniJsonTreeNode[] = [];

  ngOnInit() {
    this.render();
  }

  toggle(e: Event, node: IUniJsonTreeNode) {
    if (node.expandable) {
      e.stopImmediatePropagation();
      e.preventDefault();
      node.expanded = !node.expanded;
    }
  }

  expandAll() {
    this.deep = true;
    this.expanded = true;
    this.render();
  }

  collapseAll() {
    this.deep = false;
    this.expanded = false;
    this.render();
  }

  private stringifyJSON(json: any) {
    return JSON.stringify(json, undefined, 2);
  }

  private parseJSON(key: string, value: any) {
    const type = typeof value;
    const node: IUniJsonTreeNode = {
      key,
      value,
      description: `${value}`,
      expanded: this.deep ? this.expanded : false,
    };

    if (type === 'number' || type === 'bigint') {
      node.type = UniJsonTreeNodeType.Number;
    } else if (type === 'string') {
      node.type = UniJsonTreeNodeType.String;
      node.description = `"${value}"`;
    } else if (type === 'boolean') {
      node.type = UniJsonTreeNodeType.Boolean;
    } else if (type === 'function') {
      node.type = UniJsonTreeNodeType.Function;
    } else if (type === 'undefined') {
      node.type = UniJsonTreeNodeType.Undefined;
      node.description = 'undefined';
    } else if (type === 'object') {
      if (value === null) {
        node.type = UniJsonTreeNodeType.Null;
        node.description = 'null';
      } else if (Array.isArray(value)) {
        node.type = UniJsonTreeNodeType.Array;
        node.description = this.stringifyJSON(value);
      } else if (value instanceof Date) {
        node.type = UniJsonTreeNodeType.Date;
      } else {
        node.type = UniJsonTreeNodeType.Object;
        node.description = this.stringifyJSON(value);
      }
    }

    node.expandable = node.type === UniJsonTreeNodeType.Object ||
                      node.type === UniJsonTreeNodeType.Array;

    return node;
  }

  private render() {
    if (typeof this.json === 'object') {
      this.nodes = [];

      for (const key of Object.keys(this.json)) {
        this.nodes.push(this.parseJSON(key, this.json[key]));
      }
    } else {
      this.nodes = [this.parseJSON(`(${typeof this.json})`, this.json)];
    }
  }
}
