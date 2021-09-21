import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuService } from './context-menu.service';

@NgModule({
  declarations: [ContextMenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ContextMenuComponent
  ],
  providers: [
    ContextMenuService
  ]
})
export class TeschContextMenuModule { }
