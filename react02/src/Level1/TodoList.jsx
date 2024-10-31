import React, { useEffect, useState } from 'react'

function TodoList() {
  let time = new Date();
  const [inputValue,setInputValue] = useState("");
  const [tasks,setTasks] = useState([]);
  const handleInput = (value)=>{
    setInputValue(value);
  }
  // Load tasks from local storage 
  useEffect(()=>{
    const storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
      setTasks(JSON.parse(storedTasks))
    }
  },[])
 // Store tasks in local storage whenever changed
 useEffect(() => {
  const handleSet = setTimeout(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },1000);
  return ()=>clearInterval(handleSet);
 },[tasks])
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(inputValue !== "" && !tasks.includes(inputValue)){
        setTasks((prevTasks)=>[...prevTasks,inputValue]);
        setInputValue("");
    }
  }
  const handleClick = (indx)=>{
    setTasks((prevTasks)=>prevTasks.filter((_, i)=>i !== indx));
}
const handleDelete = ()=>{
    setTasks([]);
  }
  return (
    <div className='w-full h-full items-center justify-between flex flex-col bg-white bg-opacity-10  rounded-lg p-4 text-center items-center gap-y-3'>
        <p className='text-xl font-semibold'>{time.toDateString()}</p>
        <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-wrap'>
            <div>
            <input value={inputValue} onChange={(e)=>handleInput(e.target.value)} className='w-full rounded-none rounded-l bg-white bg-opacity-20 px-4 py-3' type="text"/>
            <button className='rounded-none rounded-r w-full bg-yellow-600' type='submit'>+ Add Task</button>
            </div>
        </form>
        <div className='flex flex-col text-start rounded-xl w-3/4 gap-y-2 bg-blue-600 px-5 py-2 bg-opacity-40'>
            {
            tasks.map((task,i)=>{
                return <li onClick={()=>handleClick(i)} className='cursor-pointer text-xl text-white font-bold' key={i}>{task}</li>
            })}
        </div>
        <div className='flex flex-wrap gap-x-3 text-lg font-semibold '>
        <p className='flex flex-wrap items-center bg-green-400 rounded bg-opacity-30 px-2 py-1'>Tap to remove.</p>
        <button onClick={handleDelete} className='bg-red-700 rounded px-2 py-1 cursor-pointer'>Delete All.</button>
        </div>
        <div className="w-full text-end">
        <a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a>
         </div>
    </div>
  )
}

export default TodoList