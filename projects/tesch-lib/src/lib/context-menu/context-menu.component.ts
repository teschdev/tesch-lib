import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input } from '@angular/core';
import { ContextMenuAction } from './interfaces/context-menu-action';

@Component({
  selector: 'thc-action-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent<T> {
  @Input() actions: ContextMenuAction<T>[];

  @Input() actor: T;

  position: {
    left?: number|string,
    ridhe?: number|string,
    top?: number|string,
    bottom?: number|string,
  };

  show = false;

  constructor(private _el: ElementRef) { }

  @HostListener(`document:click`, ['$event'])
  documentClick(e): void {
    if (!this._el.nativeElement.contains(e.target)) {
      this.show = false;
    }
  }

  @HostListener(`click`, ['$event'])
  menuToggle(e): void {
    this.show = !this.show;

    this.setMenuPosition(e);
  }

  private setMenuPosition({ x }) {
    const actionMenu = this._el.nativeElement.querySelector('.menu-wrap');

    if (x && actionMenu) {
      actionMenu.style.left = x
    }
  }

}
