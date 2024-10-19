import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function GrandChildCounter() {
 const {count, increment,decrement} = useContext(CounterContext);
  return (
    <div className='p-2 py-4 bg-black'>
        <div className='flex flex-col '>
        <h2 className='text-xl'>GrandChild Component</h2>
        <p>Count: {count}</p>
        <div className='flex justify-center gap-x-4'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
        </div>
    </div>
  )
}

export default GrandChildCounter