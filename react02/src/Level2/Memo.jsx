import React, { memo, useState } from 'react';

// Counter component
const Counter = ({ count }) => {
    console.log("Counter component rendered.");
    return <h2 className="text-4xl font-bold text-center">{count}</h2>;
};

const MemoizedCounter = memo(Counter);

function Memo() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState("Hello");
    const [incrementValue, setIncrementValue] = useState(1); 

    return (
        <div className='w-full h-full flex flex-col align-center items-center p-2 justify-between gap-y-2 text-gray-300'>
            <h2 className="text-2xl font-bold text-gray-500">React.memo() Counter</h2>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <MemoizedCounter count={count} />
                <div className="flex gap-x-2 mt-4">
                    <button 
                        className="p-3 bg-green-600 hover:bg-green-500 rounded-lg text-white transition"
                        onClick={() => setCount((prevCount)=>prevCount + incrementValue)}
                    >
                        Increment
                    </button>
                    <button 
                        className="p-3 bg-red-600 hover:bg-red-500 rounded-lg text-white transition"
                        onClick={() => setCount((prevCount)=>prevCount - incrementValue)}
                    >
                        Decrement
                    </button>
                    <button 
                        className="p-3 bg-gray-600 hover:bg-gray-500 rounded-lg text-white transition"
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </div>
                <div className="mt-4">
                    <input
                        type="number"
                        value={incrementValue}
                        onChange={(e) => setIncrementValue(Number(e.target.value))}
                        className="p-2 rounded-lg border border-gray-600"
                        placeholder="Increment Value"
                    />
                </div>
                <div className="mt-4">
                    <button 
                        className="bg-green-700 p-2 rounded text-white hover:bg-green-600 transition"
                        onClick={() => setOtherState(otherState + " World")}
                    >
                        Change Other State
                    </button>
                </div>
                <div className="mt-2 text-sm text-gray-400">
                    <p>See the console for render logs!</p>
                </div>
            </div>
            <div className="mt-2 w-full text-end"><a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a></div>
        </div>
    );
}

export default Memo;
