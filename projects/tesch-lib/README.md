# TeschLib

## Considerações importantes

TeschLib utiliza animações, portanto inclua __BrowserAnimationsModule__ no array de importações em __app.module.ts__

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

...
imports: [
  ...,
  BrowserAnimationsModule,
  ...
]
```

## THC-Styles

adicione ao array styles no arquivo angular.json o arquivo de estilos globais.

```
build: {
  config: {
    options: {
      styles: [
        "node_modules/tesch-lib/css/thc-styles.scss",
        ...
      ]
    }
  }
}
```

### Default Styles

* .thc-success  ![#22bb33](https://via.placeholder.com/15/22bb33/000000?text=+) `#22bb33`
* .thc-warning ![#f0ad4e](https://via.placeholder.com/15/f0ad4e/000000?text=+) `#f0ad4e`
* .thc-error ![#bb2124](https://via.placeholder.com/15/bb2124/000000?text=+) `#bb2124`
* .thc-info ![#5bc0de](https://via.placeholder.com/15/5bc0de/000000?text=+) `#5bc0de`

## TeschAlertModule

Importe o Modulo

```import { TeschAlertModule } from '@tesch/tesch-lib'```

Exemplo de uso: 

>app.component.ts

```
  import { ThcAlertService } from '@tesch/tesch-lib/alert/alert.service'

  export class AppComponent {
    constructor(private alertService: AlertService) {}

    showAlert() {
      this.alertService.sucesso('texto da mensagem', { autoClose: false });
    }
  }
```

>app.component.html

```
<div>
  <thc-alert></thc-alert>
</div>

<thc-button class="thc-success" label="Exibir alert" (clicou)="showAlert()"></thc-button>
```

## TeschButtonModule

Importe o Modulo

```import { TeschButtonModule } from '@tesch/tesch-lib'```

Exemplo de uso:

```
<thc-button 
  label="Texto do Botão"
  (clicou)="handleClick($event)"
></thc-button>
```
### propriedades (Property Bind)

| Propriedade  | Valor Padrão  | Tipo  |
| ------------- |:-------------:| -----:|
| label         | botão         | string|
| icon         | null         | string|

### eventos (Event Bind)

| Eventos      | Valor de Retorno    |
| ------------- |:-------------------:|
| clicou         | MouseEvent          |

### classes

| Classe      |
| ------------- |
| thc-button    |
| thc-button-container    |

## TeschContextMenuModule

Importe o Modulo

```import { TeschContextMenuModule } from '@tesch/tesch-lib'```

Exemplo de uso:

> __app.component.html__
```
<thc-action-menu 
  [actor]="fakeActor" 
  [actions]="context_menu" 
></thc-action-menu>
```

>__app.component.ts__
```
export class AppComponent implements OnInit {
  fakeActor = {
    id: uuid(),
    age: 21
  }

  context_menu: ContextMenuAction<any>[] = [];

  constructor(
    private menuService: ContextMenuService, private injector: Injector
  ) {}

  ngOnInit(): void {
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
  }
}
```

### propriedades (Property Bind)

| Propriedade   | Valor Padrão  | Tipo  |
| ------------- |:-------------:| -----:|
| actions       | undefined     | ContextMenuAction< T >[]|
| actor          | undefined          | T |


### classes

| Classe                  |
| -------------           |
| thc-action-button       |
| thc-menu-wrap           |
| thc-context-menu        |
| thc-context-menu-item   |
| thc-action-icon         |


## TeschNavBarModule

Importe o Modulo

```import { TeschNavBarModule } from '@tesch/tesch-lib'```

Exemplo de uso:

> __app.component.html__
```
<thc-nav-bar [itemsMenu]="menuNav"></thc-nav-bar>
```

>__app.component.ts__
```
import { ThcMenuItem } from '@tesch/tesch-lib';

export class AppComponent {
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
}
```

### propriedades (Property Bind)

| Propriedade   | Valor Padrão  | Tipo  |
| ------------- |:-------------:| -----:|
| itemsMenu     | undefined     | ThcMenuItem[]|


### classes

| Classe                   |
| ------------------------ |
| thc-navbar               |
| thc-navbar-options       |
| thc-navbar-options-group |
| thc-navbar-options-link  |
| thc-menu-item            |
| thc-menu-item-container  |
| thc-menu-item-label      |
| thc-menu-item-icon       |
