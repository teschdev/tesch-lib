import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeschAlertModule, TeschButtonModule, TeschContextMenuModule, ThcAlertService } from '@tesch/tesch-lib';
import { TeschNavBarModule } from 'projects/tesch-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TeschButtonModule,
    TeschAlertModule,
    TeschContextMenuModule,
    TeschNavBarModule
  ],
  providers: [
    ThcAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
