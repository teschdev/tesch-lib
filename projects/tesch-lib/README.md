# TeschLib

## TeschButtonModule

Importe o Modulo

> import { TeschButtonModule } from '@tesch/tesch-lib/button/button.module'

Exemplo de uso:

```
<thc-button 
  label="Texto do Botão"
  (clicou)="handleClick($event)"
></thc-button>
```

| Propriedades  | Valor Padrão  | Tipo  |
| ------------- |:-------------:| -----:|
| label         | botão         | string|

| Eventos       | Valor de Retorno    |
| ------------- |:-------------------:|
| clicou         | MouseEvent          |
