import React, { useState, createContext, ReactNode } from 'react';

import { ProductProps } from '../components/ProductCard';

export type ProductCartProps = {
  product: ProductProps;
  amount: number;
  total: number;
};

type CartContextData = {
  cart: ProductCartProps[] | [];
  addToCart: (product: ProductProps) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductCartProps[] | []>([]);

  const addToCart = (product: ProductProps) => {
    console.log(product);
    const indexItem = cart.findIndex((item: ProductCartProps) => item.product.id === product.id);

    if (indexItem !== -1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * Number(cartList[indexItem].product.price);

      setCart(cartList);
      return;
    }

    let data: ProductCartProps = {
      product: product,
      amount: 1,
      total: product.price,
    };

    setCart(products => [...products, data]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}
