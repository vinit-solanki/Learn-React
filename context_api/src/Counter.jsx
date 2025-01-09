import React, { createContext, useContext, useState } from 'react'
const CounterContext = createContext();

function Counter() {
    const [count,setCount] = useState(0);
    const increment = ()=>{
        return setCount(prev=>prev+1);
    }
    const decrement = ()=>{
        return setCount(prev=>prev-1);
    }
  return (
    <CounterContext.Provider value={{ count: count, setCount: setCount, increment: increment, decrement: decrement }}>
      <ShowCount/>
      <Buttons/>
    </CounterContext.Provider>
  );
}
function ShowCount(){
    const {count} = useContext(CounterContext);
    return <div>{count}</div>
}
function Buttons(){
    const {setCount, increment, decrement} = useContext(CounterContext);
    return <div>
        <button onClick={()=>increment()}>Increment</button>
        <button onClick={()=>decrement()}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
}
export default Counter