import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableItemDirective } from './directives/table-item.directive';
import { TableComponent } from './table.component';



@NgModule({
  declarations: [TableComponent, TableItemDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    TableItemDirective
  ]
})
export class TeschTableModule { }
