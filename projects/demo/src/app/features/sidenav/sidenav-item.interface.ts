export interface ISidenavItem {
  text: string;
  route?: string | string[];
  routes?: ISidenavItem[];
  expanded?: boolean;
}
