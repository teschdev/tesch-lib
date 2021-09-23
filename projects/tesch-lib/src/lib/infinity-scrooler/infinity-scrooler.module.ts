import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeschButtonModule } from '../button/button.module';
import { InfinityScroolerComponent } from './infinity-scrooler.component';

@NgModule({
  declarations: [InfinityScroolerComponent],
  imports: [
    CommonModule,
    TeschButtonModule,
    ScrollingModule
  ],
  exports: [
    InfinityScroolerComponent
  ]
})
export class TeschInfinityScroolerModule { }
