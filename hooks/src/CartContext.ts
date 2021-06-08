import { createContext } from "react";

type IProduct = {
  id: number;
  name: string;
  price: number;
};

interface ICart {
  products: IProduct[];
  shipping_value?: number;
}

const CartContext = createContext<ICart>({ products: [] });

export default CartContext;
