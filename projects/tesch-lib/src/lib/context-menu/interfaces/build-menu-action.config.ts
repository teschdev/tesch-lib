export interface BuildMenuActionConfig<Item, Params> {
  resolveParams: (item: Item) => Params;
  isVisible?: (item: Item) => boolean;
  isDisable?: (item: Item) => boolean;
  visible?: boolean;
  disable?: boolean;
  onSuccess: (item: Item) => void;
}
