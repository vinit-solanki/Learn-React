import {React,useState} from 'react'

function NormalForm() {
    const [log,setLog]=useState(false);
    const handleLog = ()=>{
      // e.preventDeafult();
      setLog((prev)=>!prev);
    }
  return (
    <form className="w-full h-full items-center justify-between  text-start flex flex-col gap-y-3 bg-white bg-opacity-10  p-4 rounded-lg">
    <p className="text-gray-300">{log && "You have sucessfully logged in!"}</p>
    <div className="flex flex-wrap">
      <h2 className="text-3xl font-semibold">Normal Sign Up Form</h2>
      <p className="text-gray-300">Create an account to get started</p>
    </div>
      <div className="w-full flex gap-x-5 items-center text-lg justify-between">
        <label htmlFor="first-name">First Name</label>
        <input
          className="p-3 rounded-lg w-1/2"
          type="text"
          placeholder="Enter your first name"
          id="first-name"
        />
      </div>
      <div className="w-full flex gap-x-5 items-center text-lg justify-between">
        <label htmlFor="last-name">Last Name</label>
        <input
          className="p-3 rounded-lg w-1/2"
          type="text"
          placeholder="Enter your last name"
          id="last-name"
        />
      </div>
      <div className="w-full flex gap-x-5 items-center text-lg justify-between">
        <label htmlFor="email">Email Address</label>
        <input
          className="p-3 rounded-lg w-1/2"
          type="email"
          placeholder="Enter your email"
          id="email"
        />
      </div>
      <button type="submit" onClick={handleLog} className="w-full bg-red-700 font-bold">Submit</button>
    <div className="w-full flex justify-end items-end"><a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a></div>
    </form>
  )
}

export default NormalForm