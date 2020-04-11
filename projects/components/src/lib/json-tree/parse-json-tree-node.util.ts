import { IUniJsonTreeNode } from './json-tree-node.interface';
import { UniJsonTreeNodeType } from './json-tree-node-type.enum';

export function uniParseJsonTreeNode(key: string, value: any) {
  const type = typeof value;
  const node: IUniJsonTreeNode = {
    key,
    value,
    description: `${value}`,
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
      node.description = JSON.stringify(value, undefined, 2);
    } else if (value instanceof Date) {
      node.type = UniJsonTreeNodeType.Date;
    } else {
      node.type = UniJsonTreeNodeType.Object;
      node.description = JSON.stringify(value, undefined, 2);
    }
  }

  node.expandable = node.type === UniJsonTreeNodeType.Object ||
                    node.type === UniJsonTreeNodeType.Array;

  return node;
}
