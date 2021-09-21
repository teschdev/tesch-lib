import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [NavBarComponent, MenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class TeschNavBarModule { }
