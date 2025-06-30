import { createContext, useContext } from "react";
import useCart from "../hooks/useCart";

// 1- DEFINIR EL CONTEXTO
const CartContext = createContext()

// 2- CREAR EL PROVIDER
export const CartProvider = ({ children}) => {

  const cart = useCart()

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

// 3- CREAR UN CUSTOM HOOK PARA CONSUMIR EL CONTEXTO
export function useCartContext() {
  return useContext(CartContext)
}