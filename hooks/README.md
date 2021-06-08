# React Hooks

- useMemo
  - [x] memoriza um valor,calculo.
  - o valor so vai ser recalculado se uma variável em especifico mudar.

```ts
// vai ser recalculado sempre que o component inteiro mudar.
const names = users?.map((user) => user.name).join(", ");

// só vai ser recalculado quando a variável *users* mudar.
const names = useMemo(
  () => users?.map((user) => user.name).join(", "),
  [users] // dependência
);
```

- useRef
  - [x] faz referencia para algum elemento da **DOM**
  - ex: fazer focus dentro de um _input_

```ts
const inputRef = useRef<HTMLInputElement>(null);
const focusOnInput = () => inputRef.current?.focus();
```

- useContext
  - [x] permite repassar valores entre Components

```ts
// declarando o context
const CartContext = createContext<ICart>({ products: [] });

export default CartContext;

// usando o context
const AppContext: React.FC = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      {products?.map((product) => (
        <strong key={product.id}>{product.name}</strong>
      ))}
    </div>
  );
};
```
