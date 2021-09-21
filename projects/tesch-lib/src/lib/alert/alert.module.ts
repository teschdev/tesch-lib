import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './alert.component';
import { ThcAlertService } from './alert.service';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    ThcAlertService
  ]
})
export class TeschAlertModule { }
