import React, { useState } from "react";
import './App.css';
import Level1 from "./Level1Tab";
import Level2 from "./Level2Tab";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  const [tab, setTab] = useState("level-1");

  return (
    <>
      <div className="w-full p-4 bg-slate-950 gap-x-4 text-center flex items-center justify-center">
        &rang;
        <button className="px-9" onClick={() => setTab("level-1")}>Level-1</button>|
        <button className="px-9" onClick={() => setTab("level-2")}>Level-2</button>
        &lang;
      </div>
      <div className="breaking-div h-1 w-full animate-gradient"></div>

      {/* Transition between Level1 and Level2 */}
      <SwitchTransition>
        <CSSTransition
          key={tab}
          timeout={250}
          classNames="fade"
        >
          {tab === "level-1" ? <Level1 /> : <Level2 />}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
