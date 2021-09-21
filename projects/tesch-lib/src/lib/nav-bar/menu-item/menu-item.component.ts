import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MenuOptions } from '../interfaces/menu-options';

@Component({
  selector: 'thc-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() label: string;

  @Input() icon: string;

  @Input() itemId: string;

  @Input() options: MenuOptions[];

  @Output() itemSelecionado: EventEmitter<any> = new EventEmitter();

  @HostListener(`click`, ['$event'])
  activateItemMenu() {
    this.itemSelecionado.emit({ id: this.itemId, options: this.options })
  }
}
