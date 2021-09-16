import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TeschButtonModule } from './../../../tesch-lib/src/lib/button/button.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeschButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
