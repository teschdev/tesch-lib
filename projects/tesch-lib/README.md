# TeschLib

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
* .thc-alert ![#bb2124](https://via.placeholder.com/15/bb2124/000000?text=+) `#bb2124`
* .thc-info ![#5bc0de](https://via.placeholder.com/15/5bc0de/000000?text=+) `#5bc0de`

## TeschButtonModule

Importe o Modulo

```import { TeschButtonModule } from '@tesch/tesch-lib/button/button.module'```

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
