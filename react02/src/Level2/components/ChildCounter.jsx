import React, { useContext } from 'react'
import GrandChildCounter from './GrandChildCounter'
import { CounterContext } from '../context/CounterContext'

function ChildCounter() {
    const {reset} = useContext(CounterContext);
  return (
    <div className='p-2 py-4 bg-black bg-opacity-40'>
        <div className='flex flex-col gap-y-3'>
        <h2 className='text-2xl'>Child Component</h2>
        <button onClick={reset}>Reset</button>
        <GrandChildCounter/>
        </div>
    </div>
  )
}

export default ChildCounter