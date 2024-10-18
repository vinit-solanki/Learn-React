import React from 'react'
import { useState, useEffect } from 'react';
function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`(Filled Dependecy Array) Effect runs whenever "count" or "name" changes.`);
      }, [count]); // Runs when `count` changes    
  return (
    <div className='w-full h-full items-center justify-between flex flex-col bg-white bg-opacity-10  rounded-lg p-4 text-center items-center gap-y-3'>
        <p>(See the output in the console)</p>
        <div className='w-full font-semibold bg-gray-400 p-2 rounded-lg bg-opacity-30 flex flex-col justify-center items-center'>
            <h2>No Dependency Arrray</h2>
            <p>Effect runs after every render.</p>
            {
                useEffect(() => {
                    console.log("(No Dependency Arrray) Effect runs after every render.");
                  })
            }
        </div>
        <div className='w-full font-semibold bg-gray-400 p-2 rounded-lg bg-opacity-30 flex flex-col justify-center items-center'>
            <h2>Empty Dependency Array</h2>
            <p>Effect runs only once after the initial render.</p>
            {
                useEffect(() => {
                    console.log("(Empty Dependency Array) Effect runs only once after the initial render.");
                  }, [])
            }
        </div>
        <div className='w-full font-semibold bg-gray-400 p-2 rounded-lg bg-opacity-30 flex items-center justify-center '>
            <div className='text-start mr-1'>
            <h2>Filled Dependecy Array</h2>
            <p>Effect runs whenever <b>Count: {count} </b>  changes.</p>                
            </div>
            <button className='bg-yellow-600' onClick={()=>setCount((prev)=>prev+1)}>Change Count</button>
        </div>
        <div className="w-full text-end"><button className="bg-green-700 p-2">Get Code</button></div>
    </div>
  )
}

export default UseEffect