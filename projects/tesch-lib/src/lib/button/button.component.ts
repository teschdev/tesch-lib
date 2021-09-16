import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'thc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'botão';

  @Output() clicou: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
