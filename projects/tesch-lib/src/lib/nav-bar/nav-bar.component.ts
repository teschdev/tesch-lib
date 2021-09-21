import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input } from '@angular/core';
import { ThcMenuItem } from './interfaces/menu-item';

@Component({
  selector: 'thc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('toggleAuxMenu', [
        state('closed', style({
            height: '0',

        })),
        state('open', style({
            height: '*',
            width: '*',
            opacity: '1'
        })),
        transition('* => *', animate('0.5s'))
    ]),
    trigger('hideShow', [
      state('closed', style({
        width: '0px'
      })),
      state('open', style({
        width: '*'
      })),
      transition('* => *', animate('5s'))
    ])
]
})
export class NavBarComponent {
  @Input() itemsMenu: ThcMenuItem[];

  toggleMenu: string;

  optionsMenuSelecionado:  any;

  selecionado: string;

  constructor(private _el: ElementRef) {}

  openMenu({ id, options }) {
    if ((this.toggleMenu === 'open' && this.selecionado !== id) || !this.toggleMenu) {
      this.toggleMenu = 'closed';
      this.clear();
      setTimeout(() => {
        this.setOptions(options);
        this.selecionado = id;
        this.toggleMenu = 'open'
      }, 250);
      return;
    }

    if (this.toggleMenu === "closed") {
      this.clear();
      this.toggleMenu = "open"
      setTimeout(() => {
        this.setOptions(options);
        this.selecionado = id;
      }, 250);
    } else {
      this.clear();
      this.toggleMenu = "closed"
    }
  }

  private setOptions(options) {
    const grupos = [];
    options.forEach(({ group }) => {
      if (!grupos.includes(group)) {
        grupos.push(group);
      }
    });

    const optionsAgrupadas = grupos.map(grupo => {
      return options.filter(({ group }) => group === grupo)
    });

    this.optionsMenuSelecionado = optionsAgrupadas;
  }

  private clear() {
    this.optionsMenuSelecionado = null;
    this.selecionado = null;
  }
}
