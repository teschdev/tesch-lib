import { Component } from '@angular/core';
import { ThcAlertService } from '@tesch/tesch-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-library';

  constructor(private alertService: ThcAlertService) {}

  alertSucess() {
    this.alertService.sucesso('Mensagem de Teste - Sucesso', { autoClose: false });
  }

  alertInfo() {
    this.alertService.info('Mensagem de Teste - Info', { autoClose: false });
  }

  alertWarning() {
    this.alertService.warning('Mensagem de Teste - Warning', { autoClose: false });
  }

  alertError() {
    this.alertService.error('Mensagem de Teste - Error', { autoClose: false });
  }

  alertAutoClose() {
    this.alertService.error('Mensagem de Teste - Auto Close', { autoClose: true, fade: true });
  }
}
