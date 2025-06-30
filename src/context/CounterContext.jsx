import { createContext, useContext } from "react";
import useCounter from "../hooks/useCounter";

// 1- DEFINIR EL CONTEXTO
const CounterContext = createContext()

// 2- CREAR EL PROVIDER
export const CounterProvider = ({ children}) => {

  const counter = useCounter(1)

  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  )
}

// 3- CREAR UN CUSTOM HOOK PARA CONSUMIR EL CONTEXTO
export function useCounterContext() {
  return useContext(CounterContext)
}