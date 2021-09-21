import { Injectable } from '@angular/core';
import { ActionMenuContructor } from './interfaces/action-menu-constructor';
import { ContextMenuAction } from './interfaces/context-menu-action';


@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {

  createContextMenuItem(
    dataAction: ActionMenuContructor,
    ...params: [string, any][]
  ): ContextMenuAction<any> {
    const { action, visible, callbackFn, isVisible } = dataAction;
    return action.build<any>({
      resolveParams: (item) => this.configParams(item, ...params),
      isVisible: (item) => visible || isVisible(item),
      onSuccess: (item) => callbackFn(item)
    });
  }

  configParams(actor, ...args) {
    const container = actor;
    if (args.length) {
      args.forEach((item) => {
        container[item[0]] = item[1];
      });
    }
    return { data: {...container} };
  }
}
