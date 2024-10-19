import React, { useRef } from 'react'

function useRefForm() {
  // const username = document.getElementById('username');
  // const password = document.getElementById('password');
  // The React Way:
  const username = useRef();
  const password = useRef();
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(username.value, password.value)
    console.log(username.current.value, password.current.value)
  }
  return (
    <div className='w-full h-full flex flex-col  bg-white bg-opacity-10 rounded-lg p-4 '>
      <h1>useRef Form</h1>
    <form className='w-full h-full flex flex-col gap-y-3 justify-center align-center items-start ' onSubmit={handleSubmit}>
      {/* Passing the reference in input field with ref */}
      <label id='username' htmlFor={username} className='text-xl font-semibold'>Username</label>
      <input className='w-full p-2 rounded-lg ' type="text" id='username' ref={username}/>
      <label id='password' htmlFor={password} className='text-xl font-semibold'>Password</label>
      <input className='w-full p-2 rounded-lg ' type="password" id='password' ref={password}/>
      <button type="submit" className='w-full'>Submit</button>
    </form>
    <div className='w-full p-3 bg-black mt-1 font-bold rounded-lg text-justify'>
      See the console to obtain the output.
    </div>
    <div className="mt-2 w-full text-end"><button className="bg-green-700 p-2">Get Code</button></div>
    </div>
  )
}

export default useRefForm