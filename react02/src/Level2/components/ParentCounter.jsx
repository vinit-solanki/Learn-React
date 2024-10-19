import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChildCounter from './ChildCounter'

function ParentCounter() {
  const {count} = useContext(CounterContext)
  return (
    <div className='p-2 py-4 bg-black bg-opacity-30'>
        <div className='flex flex-col mb-2'>
        <h2 className='text-3xl'>Parent Component</h2>
        <h2>Count: {count}</h2>
        </div>
        <ChildCounter/>
    </div>
  )
}

export default ParentCounter