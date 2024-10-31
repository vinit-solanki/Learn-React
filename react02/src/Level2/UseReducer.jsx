import React, { useReducer } from 'react';

function UseReducer() {
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case 'increment':
        return {...state,count:state.count + state.inc};
      case 'decrement':
        return {...state,count:state.count - state.dec};
      case 'reset':
        return {...state,count: 0};
      default:
        return state;
    }
  };
  const initialState = {
    count: 0,
    inc: 1,
    dec: 1
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-2 w-full h-full flex flex-col items-center justify-between gap-y-3 text-gray-300">
      <h2 className="text-2xl font-bold text-gray-500">Counters using useReducer Hook</h2>
      <div className="w-full p-3 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">{state.count}</h2>
        <div className="flex flex-col gap-y-3">
          <button
            className="w-full p-3 rounded-lg bg-green-600 hover:bg-green-700 text-white transition"
            onClick={() => dispatch({ type: 'increment' })}
          >
            Increment
          </button>
          <button
            className="w-full p-3 rounded-lg bg-red-600 hover:bg-red-500 text-white transition"
            onClick={() => dispatch({ type: 'decrement' })}
          >
            Decrement
          </button>
          <button
            className="w-full p-3 rounded-lg bg-gray-600 hover:bg-gray-500 text-white transition"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-2 w-full text-end"><a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a></div>
    </div>
  );
}

export default UseReducer;
