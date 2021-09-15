import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-tesch-lib',
  templateUrl: './tesch-lib.component.html',
  styles: [
  ]
})
export class TeschLibComponent {
  @Input() name;

  @Output() clicou = new EventEmitter();

}
