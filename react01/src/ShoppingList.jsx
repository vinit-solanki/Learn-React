import React, { useEffect, useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import {v4 as uuid} from "uuid";
function ShoppingList() {
  const [listArray,setListArray] = useState([]);
  const [item,setItem]= useState("");
  
  const addTask = ()=>{
    setListArray([...listArray,item])
    setItem("");
  }
  const deleteTask = (id)=>{
    setListArray(listArray.filter((task,i)=>{
      return i!==id?task:"";
    }))
  }
  return (
    <div className='relative flex flex-col justify-center align-center items-center gap-y-3'>
        <div className='relative flex flex-wrap gap-2'>
        <input  onChange={(e)=>setItem(e.target.value)} value={item} placeholder='Enter your task...' className='w-full task rounded-lg px-4 py-3 text-2xl font-semibold'/>
        <button onClick={addTask} className='w-full text-xl text-yellow-400'>+</button>
        </div>
        {/* <p className='text-lg text-black font-bold italic'>Double tap to delete</p> */}
        <div className='w-full p-3 bg-white bg-opacity-20 rounded-lg'>
            <ul className='list-none p-0 m-0'>
                {
                    listArray.length>0?listArray.map((item,indx)=>{
                        return (
                            <li key={indx} className='flex justify-between align-center items-center p-3 text-2xl text-black mt-3 border-2 border-black rounded-xl'>{item} <span className='cursor-pointer' onClick={()=>deleteTask(indx)}><FaDeleteLeft/></span></li>
                        )
                    }):<div className='text-xl font-semibold text-black'>Add Tasks</div>
                }
            </ul>
        </div>
    </div>
  )
}

export default ShoppingList