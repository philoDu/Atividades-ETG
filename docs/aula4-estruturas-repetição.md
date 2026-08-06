# Estruturas de Repetição em JavaScript

As estruturas de repetição permitem executar um bloco de código várias vezes, enquanto uma condição for verdadeira ou para percorrer coleções de dados. Elas reduzem a repetição de código e tornam os programas mais organizados e eficientes.

## Principais estruturas

- **`for`**: utilizada quando o número de repetições é conhecido.
- **`while`**: executa o bloco enquanto uma condição for verdadeira.
- **`do...while`**: semelhante ao `while`, mas garante que o bloco seja executado pelo menos uma vez.
- **`for...of`**: percorre os valores de estruturas iteráveis, como arrays e strings.
- **`for...in`**: percorre as propriedades de um objeto.

## Exemplo

```javascript
// for
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

// do...while
let numero = 1;
do {
  console.log(numero);
  numero++;
} while (numero <= 5);
```

As estruturas de repetição podem ser controladas com comandos como **`break`**, que encerra o laço, e **`continue`**, que interrompe apenas a iteração atual e passa para a próxima.
