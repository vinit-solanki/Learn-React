import React, { useState } from "react";
import './App.css'
import UserContextProvider from "./Level2/context/UserContextProvider";
import Login from "./Level2/components/Login";
import Profile from "./Level2/components/Profile";
import { ThemeProvider } from "./Level2/context/ThemeContext";
import Canvas from "./Level2/components/Canvas";
import { CounterProvider } from "./Level2/context/CounterContext";
import ParentCounter from "./Level2/components/ParentCounter";
import UseReducer from "./Level2/UseReducer";
import Memo from "./Level2/Memo";
import UseMemo from "./Level2/UseMemo";
function Level2() {
  return (
    <>
    <div className="w-full bg-slate-950 grid grid-cols-1 justify-between gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-500">Context API Form</h2>
          <div>
          <UserContextProvider>
          <Profile/>
          <Login/>
          </UserContextProvider>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
        <h2 className="text-2xl font-bold text-gray-500">Theme Togggler.</h2>
        <div>
        <ThemeProvider>
          <Canvas/>
        </ThemeProvider>
        </div>
        <div className="mt-2 w-full text-end"><a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a></div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
          <h2 className="text-2xl font-bold text-gray-500">Counters using Context API</h2>
          <div>
          <CounterProvider>
            <ParentCounter/>
          </CounterProvider>
          </div>
        <div className="mt-2 w-full text-end"><a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a></div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
          <UseReducer/>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
          <Memo/>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
          <UseMemo/>
        </div>
      </div>
    </>
  )
}

export default Level2