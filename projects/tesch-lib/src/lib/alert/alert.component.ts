import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThcAlertService } from './alert.service';
import { ThcAlertConfig } from './model/alert-settings.model';
import { ThcAlert } from './model/alert.model';

@Component({
  selector: 'thc-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id: 'padrao';

  @Input() fade = true;

  alerts: ThcAlert[] = [];

  alertSubscription: Subscription;

  routeSubscription: Subscription;

  constructor(private router: Router, private alertService: ThcAlertService) { }

  ngOnInit(): void {
    this.alertSubscription = this.alertService.onAlert(this.id).subscribe(alert => {
      if (!alert.mensagem) {
        this.alerts = [];
        return;
      }

      this.alerts.push(alert);

      if (alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 3000);
      }
    });

    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) this.alertService.clear(this.id);
    })
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: ThcAlert) {
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      this.alerts.find(x => x === alert).fade = true;

      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 250);
      return;
    }
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: ThcAlert) {
    if (!alert) return;

    const classes = ['thc-alert', 'alert-dismissable'];

    const alertTypeClass = {
      [ThcAlertConfig.SUCCESS]: 'thc-alert thc-alert-success',
      [ThcAlertConfig.ERROR]: 'thc-alert thc-alert-error',
      [ThcAlertConfig.INFO]: 'thc-alert thc-alert-info',
      [ThcAlertConfig.WARNING]: 'thc-alert thc-alert-warning',
    }

    classes.push(alertTypeClass[alert.alertType]);

    if (alert.fade) classes.push('fade');

    return classes.join(' ');
  }

}
