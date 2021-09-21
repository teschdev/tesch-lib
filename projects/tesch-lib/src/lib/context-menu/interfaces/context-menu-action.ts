export interface ContextMenuAction<T> {
  icon: string;
  label: string;
  visible?: boolean;
  isVisible: (item: T) => boolean;
  command: (item: T) => void;
  disable?: boolean;
  data?: any;
}
