import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[thcTemplate]'
})
export class TableItemDirective {

  constructor(public readonly template: TemplateRef<any>) { }

  @Input('thcTemplate') section: string;

}
