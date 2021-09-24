import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeschAlertModule, TeschButtonModule, TeschContextMenuModule, TeschNavBarModule, ThcAlertService } from '@tesch/tesch-lib';
import { TeschInfinityScroolerModule } from './../../../tesch-lib/src/lib/infinity-scrooler/infinity-scrooler.module';
import { TeschTableModule } from './../../../tesch-lib/src/lib/table/table.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AppRoutingModule,
    TeschButtonModule,
    TeschAlertModule,
    TeschContextMenuModule,
    TeschNavBarModule,
    TeschInfinityScroolerModule,
    TeschTableModule
  ],
  providers: [
    ThcAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
