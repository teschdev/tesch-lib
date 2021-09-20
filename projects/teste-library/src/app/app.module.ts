import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TeschAlertModule, TeschButtonModule, ThcAlertService } from '@tesch/tesch-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeschButtonModule,
    TeschAlertModule
  ],
  providers: [
    ThcAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
