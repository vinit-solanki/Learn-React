import React from "react";
import HookForm from "./HookForm";
function App() {

  return (
    <>
      <div className="w-full flex justify-between gap-5 m-10">
        <div className="w-full text-start flex flex-col gap-y-3 bg-white p-4 rounded-lg bg-opacity-20">
          <h2 className="text-3xl font-semibold">Normal Sign Up Form</h2>
          <p className="text-gray-300">Create an account to get started</p>
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
          <div className="w-full flex gap-x-5 items-center text-lg justify-between">
            <label htmlFor="email">Phone No.</label>
            <input
              className="p-3 rounded-lg w-1/2"
              type="email"
              placeholder="Enter your number"
              id="tel"
            />
          </div>
          <button type="submit">Submit</button>
        </div>
        <div className="w-full">
        <HookForm/>
        </div>
      </div>
    </>
  );
}

export default App;
