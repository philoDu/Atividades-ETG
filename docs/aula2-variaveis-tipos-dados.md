# Variáveis e Tipos de Dados em JavaScript

As **variáveis** são utilizadas para armazenar dados na memória durante a execução de um programa. Em JavaScript, elas podem ser declaradas com **`let`** ou **`const`**, dependendo da necessidade.

- **`let`**: declara uma variável cujo valor pode ser alterado ao longo da execução do programa.
- **`const`**: declara uma constante, cujo identificador não pode ser reatribuído após a inicialização.

## Tipos de dados primitivos

JavaScript possui sete tipos de dados primitivos:

- **String**: representa textos.
  ```javascript
  "Olá, mundo!"
  ```

- **Number**: representa números inteiros e decimais.
  ```javascript
  3
  45.78
  ```

- **BigInt**: representa números inteiros maiores que o limite suportado pelo tipo `Number`.
  ```javascript
  12345678901234567890n
  ```

- **Boolean**: representa valores lógicos.
  ```javascript
  true
  false
  ```

- **Undefined**: valor padrão de uma variável declarada, mas ainda não inicializada.
  ```javascript
  let x;
  ```

- **Null**: representa a ausência intencional de um valor.
  ```javascript
  null
  ```

- **Symbol**: representa um identificador único e imutável.
  ```javascript
  Symbol("id")
  ```

## Operador `typeof`

O operador **`typeof`** é utilizado para identificar o tipo de um valor ou variável.

```javascript
typeof "Olá, mundo!"; // "string"
typeof 3;             // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object" (comportamento histórico da linguagem)
typeof Symbol("id");  // "symbol"
```

O conhecimento dos tipos de dados e do uso adequado das variáveis é fundamental para escrever programas organizados, seguros e de fácil manutenção.
