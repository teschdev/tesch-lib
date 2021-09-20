import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ThcAlertConfig } from './model/alert-settings.model';
import { ThcAlert } from "./model/alert.model";

@Injectable({
  providedIn: 'root'
})
export class ThcAlertService {

  private subject = new BehaviorSubject<ThcAlert>(null);
  private idPadrao = 'padrao';

  exibir: boolean;

  mensagem: string;

  showCloseIcon: boolean;

  classe: string;

  onAlert(id = this.idPadrao): Observable<ThcAlert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  /**
   * @name sucesso
   * @description exibe o componente de alerta com a mensagem passada.
   * @param {*} mensagem
   * @param {*} [options]
   * @memberof AlertService
   */
  sucesso(mensagem: string, options?: any) {
    this.alert(new ThcAlert({ ...options, alertType: ThcAlertConfig.SUCCESS, mensagem }))
  }

  info(mensagem: string, options?: any) {
    this.alert(new ThcAlert({ ...options, alertType: ThcAlertConfig.INFO, mensagem }))
  }

  warning(mensagem: string, options?: any) {
    this.alert(new ThcAlert({ ...options, alertType: ThcAlertConfig.WARNING, mensagem }))
  }

  error(mensagem: string, options?: any) {
    this.alert(new ThcAlert({ ...options, alertType: ThcAlertConfig.ERROR, mensagem }))
  }

  close() {
    this.exibir = false;
  }

  alert(alert: ThcAlert) {
    alert.id = alert.id || this.idPadrao;
    this.subject.next(alert);
  }

  clear(id = this.idPadrao) {
    this.subject.next(new ThcAlert({ id }));
  }
}
