import React, { useEffect, useState } from 'react';
import Box from './Box';

// function ToggleBoxes({numBoxes}) {
//   const [box,setBox]=useState(Array(numBoxes).fill(0));
//   const [toggle,setToggle]=useState(Array(numBoxes).fill(false));
//   useEffect(()=>{
//     setBox(Array(numBoxes).fill(0))
//     setToggle(Array(numBoxes).fill(false))
// },[numBoxes]);
// const handleReset = ()=>{
//     setToggle(Array(numBoxes).fill(false));
// }
// const handleBox = (idx)=>{
//     setToggle((prevToggle)=>{
//         const newToggle = [...prevToggle];
//         newToggle[idx] = !newToggle[idx];
//         return newToggle;
//     });
// }
//   return (
//     <>
//     <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//         {
//             box.map((_,idx)=>{
//                 return <Box key={idx} toggle={toggle[idx]} onClick={()=>handleBox(idx)}/>
//             })
//         }
//     </div>
//     <button onClick={handleReset}>Reset</button>
//     </>
//   )
// }

// export default ToggleBoxes

function ToggleBoxes({numBoxes}) {
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
    <>
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {boxes.map((box,idx) =>(
            <Box
            isActive={box}
            toggle={()=>toggleBox(idx)}
            />
          )
        )}
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default ToggleBoxes;
