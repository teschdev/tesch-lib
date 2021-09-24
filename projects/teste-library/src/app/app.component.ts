import { Component, Injector, OnInit } from '@angular/core';
import { ContextMenuAction, ContextMenuService, GenericAction, ThcAlertService, ThcMenuItem } from '@tesch/tesch-lib';
import { v4 as uuid } from 'uuid';
import { ServiceService } from './service.service';

interface FakeActor {
  id: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  fakeActor1: FakeActor = {
    id: uuid(),
    age: 21
  }

  fakeActor2: FakeActor = {
    id: uuid(),
    age: 16
  }

  scroolData;

  context_menu: ContextMenuAction<any>[] = [];

  menuNav: ThcMenuItem[] = [
    {
      label: 'Item 1',
      id: uuid(),
      options:  [
        {
          id: uuid(),
          name: 'option 1',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 2',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 3',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 4',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 5',
          group: 'group 2',
        },
        {
          id: uuid(),
          name: 'option 6',
          group: 'group 2',
        },
      ]
    },
    {
      label: 'Item 2',
      id: uuid(),
      options:  [
        {
          id: uuid(),
          name: 'option 1',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 2',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 5',
          group: 'group 2',
        },
        {
          id: uuid(),
          name: 'option 6',
          group: 'group 2',
        },
      ]
    },
    {
      label: 'Item 3',
      id: uuid(),
      options:  [
        {
          id: uuid(),
          name: 'option 3',
          group: 'group 1',
          routeRedirect: 'http://google.com.br'
        },
        {
          id: uuid(),
          name: 'option 4',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 5',
          group: 'group 2',
        },
        {
          id: uuid(),
          name: 'option 6',
          group: 'group 2',
        },
      ]
    },
    {
      icon: 'fas fa-bomb',
      label: 'Item 5',
      id: uuid(),
      options:  [
        {
          id: uuid(),
          name: 'option 1',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 2',
          group: 'group 1',
        },
        {
          id: uuid(),
          name: 'option 6',
          group: 'group 2',
        },
        {
          id: uuid(),
          name: 'option 7',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 8',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 9',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 10',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 11',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 12',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 12',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 12',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 12',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 12',
          group: 'group 3',
        },
        {
          id: uuid(),
          name: 'option 13',
          group: 'group 4',
        },
        {
          id: uuid(),
          name: 'option 14',
          group: 'group 4',
        },
        {
          id: uuid(),
          name: 'option 15',
          group: 'group 4',
        },
        {
          id: uuid(),
          name: 'option 16',
          group: 'group 5',
        },
        {
          id: uuid(),
          name: 'option 17',
          group: 'group 5',
        },
        {
          id: uuid(),
          name: 'option 18',
          group: 'group 5',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 6',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 6',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 6',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 7',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 7',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 7',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 8',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 8',
        },
        {
          id: uuid(),
          name: 'option 19',
          group: 'group 8',
        },
      ]
    }
  ];

  constructor(private alertService: ThcAlertService, private menuService: ContextMenuService, private injector: Injector, private service: ServiceService) {}

  async ngOnInit() {
    this.context_menu = [
      this.menuService.createContextMenuItem(
        {
          action: this.injector.get(GenericAction),
          visible: true,
          callbackFn: (data) => console.log(data)
        },
        ['parametro_1', uuid()],
        ['parametro_2', uuid()],
        ['parametro_3', uuid()],
      ),
      this.menuService.createContextMenuItem(
        {
          action: this.injector.get(GenericAction),
          isVisible: (data) => data.age > 18,
          callbackFn: (data) => console.log(data)
        },
        ['parametro_4', uuid()],
        ['parametro_5', uuid()],
        ['parametro_6', uuid()],
      ),
    ]
    await this.startLoading({ page: 1});
  }

  async startLoading({ page }) {
    const api = 'http://179.127.31.54:8000/api/noticias/todas';
    this.scroolData = await this.service.getRequest(api, { page }).toPromise();
    console.log(this.scroolData);
  }

  alertSucess() {
    this.alertService.sucesso('Mensagem de Teste - Sucesso', { autoClose: false });
  }

  alertInfo() {
    this.alertService.info('Mensagem de Teste - Info', { autoClose: false });
  }

  alertWarning() {
    this.alertService.warning('Mensagem de Teste - Warning', { autoClose: false });
  }

  alertError() {
    this.alertService.error('Mensagem de Teste - Error', { autoClose: false });
  }

  alertAutoClose() {
    this.alertService.error('Mensagem de Teste - Auto Close', { autoClose: true, fade: true });
  }
}
