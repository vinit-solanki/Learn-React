import React, { useEffect, useState } from 'react';
import Box from './Box';

function Boxes({numBoxes}) {
  const [boxes,setBoxes] = useState(Array(numBoxes).fill(true));
  useEffect(()=>{
    setBoxes(Array(numBoxes).fill(false))
  },[numBoxes]);
  const reset = ()=>{
    setBoxes(Array(numBoxes).fill(false))
  }
  const toggleBox = (idx)=>{
    setBoxes(prevBox=>{
        return prevBox.map((value,i)=>i===idx?!value:value)
    })
  }
  return (
    <div className='flex flex-col w-full h-full items-center justify-center gap-y-4 bg-white bg-opacity-10  p-4 rounded-lg'>
      <div className="grid text-center items-center justify-center gap-3 grid-cols-3 ">
        {boxes.map((box,idx) =>(
            <Box
            isActive={box}
            toggle={()=>toggleBox(idx)}
            />
          )
        )}
      </div>
      <button className='w-3/4 bg-red-700' onClick={reset}>Reset</button>
        
      <div className="w-full text-end">
            <button className="bg-green-700 p-2">Get Code</button>
         </div>
    </div>
  );
}

export default Boxes;
