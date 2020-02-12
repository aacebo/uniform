export interface ISidenavItem {
  text: string;
  icon?: string;
  expanded?: boolean;
  route?: string | string[];
  routes?: ISidenavItem[];
}
