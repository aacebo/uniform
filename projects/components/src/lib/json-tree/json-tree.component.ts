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
    this.nodes = v !== undefined ? uniParseJsonTreeNodes(v) : [];
    this._cdr.markForCheck();
  }
  private _json?: any;

  @Output() propertyValueClick = new EventEmitter<IUniJsonTreeNode>();

  readonly state: { [key: string]: boolean | undefined } = { };

  get nodes() { return this._nodes; }
  set nodes(v: IUniJsonTreeNode[]) {
    this._nodes = v;
  }
  private _nodes: IUniJsonTreeNode[] = [];

  constructor(private readonly _cdr: ChangeDetectorRef) { }

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
