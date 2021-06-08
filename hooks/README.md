# React Hooks

- useMemo
  memoriza um valor,calculo.
  o valor so vai ser recalculado se uma variável em especifico mudar.

```ts
// vai ser recalculado sempre que o component inteiro mudar.
const names = users?.map((user) => user.name).join(", ");

// só vai ser recalculado quando a variável *users* mudar.
const names = useMemo(
  () => users?.map((user) => user.name).join(", "),
  [users] // dependência
);
```
