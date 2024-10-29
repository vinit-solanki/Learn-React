import React from "react";
import HookForm from "./Level1/HookForm";
import TodoList from "./Level1/TodoList";
import UseEffect from "./Level1/UseEffect";
import CounterEffect from "./Level1/CounterEffect";
import NormalForm from "./Level1/NormalForm";
import Quotes from "./Level1/Quotes";
import Pokemon from "./Level1/Pokemon";
import Boxes from "./Level1/Boxes";
import UseRefForm from "./Level2/useRefForm";
import './App.css'
import UserContextProvider from "./Level2/context/UserContextProvider";
import Login from "./Level2/components/Login";
import Profile from "./Level2/components/Profile";
import { ThemeProvider } from "./Level2/context/ThemeContext";
import Canvas from "./Level2/components/Canvas";
import { CounterProvider } from "./Level2/context/CounterContext";
import ParentCounter from "./Level2/components/ParentCounter";
import UseReducer from "./Level2/UseReducer";
import UseMemo from "./Level2/UseMemo";
function App() {
  return (
    <>
      <div className="w-full p-4 bg-slate-950 gap-x-4 text-center flex items-center justify-center">
      &rang;<button className="px-9">Level-1</button>|
        <button className="px-9">Level-2</button>&lang;
      </div>
      <div className="breaking-div h-1 w-full animate-gradient"></div>
      <div className="w-full bg-slate-950 grid grid-cols-1 justify-between gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full h-full items-center justify-between  bg-white bg-opacity-10 p-4 rounded-lg flex flex-wrap justify-start items-between gap-y-3">
          <h1>useState Hook</h1>
          <p className="text-justify">
            useState is a React Hook that allows you to add state to functional
            components. In earlier versions of React, managing state was only
            possible through class components. With the introduction of hooks,
            useState brings state management capability to functional
            components, making them more powerful and easier to manage.
          </p>
          <div className="w-full text-end">
            <button className="bg-green-700 p-2">Read More</button>
          </div>
        </div>
        <div>
          <Boxes numBoxes={9} />
        </div>
        <div>
          <NormalForm />
        </div>
        <div className="w-full">
          <HookForm />
        </div>
        <div className="w-full">
          <TodoList />
        </div>
        <div className="w-full h-full items-center justify-between bg-white bg-opacity-10  p-4 rounded-lg flex flex-wrap justify-start items-center gap-y-3">
          <h1>useEffect Hook</h1>
          <p className="text-justify">
            useEffect is a React Hook that allows developers to perform side
            effects in functional components. Side effects are operations like
            fetching data from an API, manipulating the DOM, or setting up
            subscriptions, which should run at specific stages of a component’s
            lifecycle.
          </p>
          <div className="w-full text-end">
            <button className="bg-green-700 p-2">Read More</button>
          </div>
          {/* <DigitalClock/> */}
        </div>
        <div className="w-full">
          <UseEffect />
        </div>
        <div className="w-full">
          <CounterEffect />
        </div>
        <div>
          <Quotes />
        </div>
        <div>
          <Pokemon />
        </div>
        <div>
          <UseRefForm />
        </div>
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
        <div className="mt-2 w-full text-end"><button className="bg-green-700 p-2">Get Code</button></div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
          <h2 className="text-2xl font-bold text-gray-500">Counters using Context API</h2>
          <div>
          <CounterProvider>
            <ParentCounter/>
          </CounterProvider>
          </div>
        <div className="mt-2 w-full text-end"><button className="bg-green-700 p-2">Get Code</button></div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
          <UseReducer/>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-3 flex flex-col justify-between gap-y-3">
          <UseMemo/>
        </div>
      </div>
    </>
  );
}

export default App;
