import React, { useState, createContext, ReactNode } from 'react';

import { ProductProps } from '../components/ProductCard';

export type ProductCartProps = {
  product: ProductProps;
  amount: number;
  total: number;
};

type CartContextData = {
  cart: ProductCartProps[] | [];
  loadingCart: boolean;
  total: number;
  addToCart: (product: ProductProps) => void;
  removeToCart: (product: ProductProps) => void;
  removeAllItemsCart: () => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductCartProps[] | []>([]);
  const [loadingCart, setLoadingCart] = useState(false);
  const [total, setTotal] = useState(0);

  const addToCart = async (product: ProductProps) => {
    setLoadingCart(true);
    const indexItem = await cart.findIndex((item: ProductCartProps) => item.product.id === product.id);

    if (indexItem !== -1) {
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * Number(cartList[indexItem].product.price);

      setCart(cartList);
      totalResultCart(cartList);
      setLoadingCart(false);
      return;
    }

    let data: ProductCartProps = {
      product: product,
      amount: 1,
      total: product.price,
    };

    setCart(products => [...products, data]);
    totalResultCart([...cart, data]);
    setLoadingCart(false);
  };

  const removeToCart = async (product: ProductProps) => {
    setLoadingCart(true);
    const indexItem = await cart.findIndex((item: ProductCartProps) => item.product.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].product.price;

      setCart(cartList);
      totalResultCart(cartList);
      setLoadingCart(false);
      return;
    }

    const removeItem = await cart.filter((item: ProductCartProps) => item.product.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
    setLoadingCart(false);
  };

  const totalResultCart = async (currentCart: ProductCartProps[]) => {
    const myCart = currentCart;
    const result = await myCart.reduce((acc, obj) => { return acc + obj.total; }, 0);
    setTotal(result);
  };

  const removeAllItemsCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      loadingCart,
      total,
      addToCart,
      removeToCart,
      removeAllItemsCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}
