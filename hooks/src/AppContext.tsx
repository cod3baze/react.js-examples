import React, { useContext } from "react";
import CartContext from "./CartContext";

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

export default AppContext;
