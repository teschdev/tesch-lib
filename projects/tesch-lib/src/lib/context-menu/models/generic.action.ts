import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActionPropertiesContextMenu } from "../interfaces/action-properties-context-menu";
import { GenericActionsParams } from './../interfaces/generic-actions-params';
import { ActionProperties } from './action-properties';


@Injectable({
  providedIn: 'root'
})
export class GenericAction extends ActionProperties<GenericActionsParams> {

  invoke(params: GenericActionsParams): any | Observable<any> | Promise<any> {
      this.someAction(params);
  }

  protected getMenu(): ActionPropertiesContextMenu {
    return {
      label: 'Exemplo Menu com texto extremamente longo',
      icon: 'fas fa-location-arrow'
    }
  }

  private someAction(params) {
    console.log(params);
  }

}
