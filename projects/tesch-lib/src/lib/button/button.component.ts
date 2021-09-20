import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'thc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'botão';

  @Input() class: string;

  @Input() icon: string;

  @Output() clicou: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
