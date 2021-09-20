import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import { ThcAlertService } from './alert.service';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    ThcAlertService
  ]
})
export class TeschAlertModule { }
