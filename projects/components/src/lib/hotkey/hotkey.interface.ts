export interface IUniHotkey {
  readonly comb: string;
  readonly keys: string[];
  readonly description: string;
  readonly cb: (hotkey: IUniHotkey) => void;
  disabled?: boolean;
}
