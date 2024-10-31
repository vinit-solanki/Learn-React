import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');    
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div className='w-full h-full flex flex-col justify-between p-4 gap-y-3'>
        <h2>Login</h2>
        <input className='rounded-lg p-2 text-2xl font-semibold' value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' />
        <input className='rounded-lg p-2 text-2xl font-semibold' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
        <div className="mt-2 w-full text-end"><a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a></div>
    </div>
  )
}

export default Login