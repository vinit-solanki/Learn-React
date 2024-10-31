import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // A complex calculation that we want to memoize
  const computeExpensiveValue = (num) => {
    console.log("Computing expensive value...");
    return num * 2; // An example of an expensive calculation
  };

  // useMemo to memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-full flex flex-col justify-center items-center text-justified p-5">
        <div className="flex gap-x-3 mt-2 justify-center items-center p-5 rounded-lg bg-black bg-opacity-30">
          <h2 className="text-2xl font-bold text-gray-500">
            Computed Value [{memoizedValue}]
          </h2>
          |
          <h1 className="text-2xl font-bold text-gray-500">
            Counter  [{count}]
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-y-3 mt-3">
          <input
            className="w-full p-3 rounded-lg border border-gray-600"
            placeholder="Increment Value"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="w-full p-3 bg-green-600 hover:bg-green-500 rounded-lg text-white transition"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>
      <div className="mt-2 w-full text-end">
      <a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a>
      </div>
    </div>
  );
}

export default UseMemo;
