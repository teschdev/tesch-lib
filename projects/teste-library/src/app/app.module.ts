import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeschAlertModule, TeschButtonModule, TeschContextMenuModule, TeschNavBarModule, ThcAlertService } from '@tesch/tesch-lib';
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
