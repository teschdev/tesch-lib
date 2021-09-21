import { isObservable, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActionPropertiesContextMenu } from './../interfaces/action-properties-context-menu';
import { BuildMenuActionConfig } from './../interfaces/build-menu-action.config';
import { ContextMenuAction } from './../interfaces/context-menu-action';

export abstract class ActionProperties<Params> {
  build<Item>(config: BuildMenuActionConfig<Item, Params>): ContextMenuAction<Item> {
    const menu = this.getMenu();

    return {
      label: menu.label,
      icon: menu.icon,
      isVisible(item) {
        return config.isVisible(item);
      },
      command: (item) => {
        const result = this.invoke(config.resolveParams(item));

        if (isObservable(result)) {
          result.pipe(take(1)).subscribe(() => config.onSuccess(item));
        } else {
          config.onSuccess(item);
        }
      }
    };
  }

  abstract invoke(params: Params): void | Observable<void> | Promise<any>;

  protected abstract getMenu(): ActionPropertiesContextMenu;
}
