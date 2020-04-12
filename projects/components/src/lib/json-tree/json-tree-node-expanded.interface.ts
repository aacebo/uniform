export interface IJsonTreeNodeExpanded {
  expanded?: boolean;
  childState?: { [key: string]: IJsonTreeNodeExpanded };
}
