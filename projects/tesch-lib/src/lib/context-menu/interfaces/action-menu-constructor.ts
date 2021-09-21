import { ActionProperties } from "../models/action-properties";

export interface ActionMenuContructor {
  action: ActionProperties<any>;
  visible?: boolean;
  isVisible?: (item) => boolean;
  callbackFn: (item) => void;
}
