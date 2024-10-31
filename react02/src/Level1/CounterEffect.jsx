import {React, useState, useEffect} from 'react'
function CounterEffect() {
  const [name,setName]=useState('Vinit')
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log('useEffect is called')
    console.log(`Name:${name} - Count:${count}`)
    return ()=>clearInterval();
  },[name,count]);
  return (
    <div className='w-full h-full items-center justify-between flex flex-col bg-white bg-opacity-10 rounded-lg p-4 text-center items-center gap-y-3'>
        <h1>useEffect Counter</h1>
        <div className='flex flex-col justify-center items-start gap-y-4'>
        <h2 className='text-2xl'>Counter: {count}</h2>
        <button className='bg-yellow-600 text-xl' onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
        <div className='mt-2'>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your name...'className='p-2 rounded-lg bg-white text-black font-bold'/>
        <p className='text-xl bg-yellow-600 font-bold mt-1 p-2 rounded-lg'>Name: {name}</p>
        </div>
        </div>
        <div className="w-full text-end"><a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a></div>
    </div>
  )
}

export default CounterEffect