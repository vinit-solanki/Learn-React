import { createContext, useState } from "react";
// 1. Context Creation
export const CounterContext = createContext();
// 2. Provider Creation
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = ()=> setCount(0)
  return (
    <CounterContext.Provider value={{ count, increment, decrement , reset }}>
      {children}
    </CounterContext.Provider>
  );
};
