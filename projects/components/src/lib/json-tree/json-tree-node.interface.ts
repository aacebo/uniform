import { UniJsonTreeNodeType } from './json-tree-node-type.enum';

export interface IUniJsonTreeNode {
  readonly key: string;
  readonly value?: any;
  type?: UniJsonTreeNodeType;
  description: string;
  expanded?: boolean;
  expandable?: boolean;
}
