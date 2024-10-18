import React, { useEffect, useState } from 'react'

function DigitalClock() {
  const [dateTime,setDateTIme] = useState(`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
  //   UseEffect is used for avoiding memory leaks\
  useEffect(()=>{
      const interval = setInterval(()=>{
        setDateTIme(`${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      },1000);
      return ()=>clearInterval(interval);
},[])
  return (
    <div className='flex flex-col bg-black bg-opacity-40 rounded-lg p-4 text-center items-center gap-y-3'>
        {/* <div className='flex flex-col gap-y-3'>
        <h2 className='text-2xl font-bold'>Digit-Clock (without useEffect())</h2>
        <div className='flex flex-wrap p-4 bg-blue-900 border-gray-200 border-2 border-opacity-50 rounded-lg'>
            <p className='text-3xl font-semibold'>{dateTime}</p>
        </div>
        </div> */}
        <div className='flex flex-col gap-y-3'>
        <div className='flex flex-wrap items-center justify-center p-4 bg-blue-900 border-gray-200 border-2 border-opacity-50 rounded-lg text-center'>
            <p className='text-3xl font-semibold'>{dateTime}</p>
        </div>
        <h2 className='text-2xl font-bold'>Digi-Clock (with useEffect())</h2>
        <p>Clears the interval (clearInterval) when the component is unmounted to prevent memory leaks.</p>
        </div>
    </div>
  )
}

export default DigitalClock