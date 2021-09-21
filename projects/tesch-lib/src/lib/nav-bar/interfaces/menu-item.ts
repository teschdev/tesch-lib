import { v4 as uuid } from 'uuid';
import { MenuOptions } from "./menu-options";

export class ThcMenuItem {
  id: string;
  label: string;
  icon?: string;
  options: MenuOptions[];

  constructor() {
    this.id = uuid();
  }
}
