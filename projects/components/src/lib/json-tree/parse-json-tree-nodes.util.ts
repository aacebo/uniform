import { IUniJsonTreeNode } from './json-tree-node.interface';
import { uniParseJsonTreeNode } from './parse-json-tree-node.util';

export function uniParseJsonTreeNodes(json?: any) {
  const nodes: IUniJsonTreeNode[] = [];

  if (typeof json === 'object') {
    for (const key of Object.keys(json)) {
      nodes.push(uniParseJsonTreeNode(key, json[key]));
    }
  } else {
    this.nodes = [uniParseJsonTreeNode(`(${typeof this.json})`, this.json)];
  }

  return nodes;
}
