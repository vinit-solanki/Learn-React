import { useState } from 'react';
import ScoreKeeper from './ScoreKeeper';
import DiceRoller from './DiceRoller';
import ToggleBoxes from './ToggleBoxes';
import ShoppingList from './ShoppingList';
import SignUp from './SignUp';
import NewForm from './NewForm';
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='w-full min-h-screen p-4 text-center flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold  text-white mb-6'>Learn React - The Easy Way</h1>
      <div className='gap-x-3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='w-full bg-white bg-opacity-20 m-2 rounded-lg p-4 flex flex-col justify-center items-center gap-y-2 border-2 border-gray-300 shadow-md hover:shadow-blue'>
          <h2 className='text-3xl font-semibold text-white'>Counters</h2>
          <MyButton count={count} onClick={handleClick} />
          <MyButton count={count} onClick={handleClick} />
        </div>
        <div className='w-full bg-white bg-opacity-20 m-2 rounded-lg p-4 flex flex-col justify-center items-center gap-y-2 border-2 border-gray-300 shadow-md hover:shadow-blue'>
          <h2 className='text-3xl font-semibold text-white'>Score Keeper</h2>
          <ScoreKeeper numPlayers={7} goal={7} />
        </div>
        <div className='w-full bg-white bg-opacity-20 m-2 rounded-lg p-4 flex flex-col justify-center items-center gap-y-2 border-2 border-gray-300 shadow-md hover:shadow-blue'>
          <h2 className='text-3xl font-semibold text-white'>Dice Roller</h2>
          <DiceRoller numDice={3} result={7} />
        </div>
        <div className='w-full bg-white bg-opacity-20 m-2 rounded-lg p-4 flex flex-col justify-center items-center gap-y-2 border-2 border-gray-300 shadow-md hover:shadow-blue'>
            <ToggleBoxes numBoxes={9}/>
       </div>
       <div className='w-full bg-white bg-opacity-20 m-2 rounded-lg p-4 flex flex-col justify-center items-center gap-y-2 border-2 border-gray-300 shadow-md hover:shadow-blue'>
            <SignUp/>
       </div>
       <div className='w-full bg-white bg-opacity-20 m-2 rounded-lg p-4 flex flex-col justify-center items-center gap-y-2 border-2 border-gray-300 shadow-md hover:shadow-blue'>
            <ShoppingList/>
       </div>
       <div className='w-full bg-white bg-opacity-20 m-2 rounded-lg p-4 flex flex-col justify-center items-center gap-y-2 border-2 border-gray-300 shadow-md hover:shadow-blue'>
            <NewForm/>
       </div>
      </div>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-gray-800 text-white text-xl font-semibold rounded-lg"
    >
      Clicked {count} times
    </button>
  );
}
