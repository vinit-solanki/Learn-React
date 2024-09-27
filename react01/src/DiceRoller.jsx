import React, { useEffect, useState } from 'react'
import Dice from './Dice'

function DiceRoller({numDice=2,result}) {
  const [sum,setSum]=useState(0);
  const [dieNums,setDieNums] = useState([]);
  const createDieNums = ()=>{
    let newDieNums = [];
    for (let i = 0; i < numDice; i++) {
        newDieNums.push(Math.floor(Math.random()*6)+1);
        }
        setDieNums(newDieNums);
        setSum(newDieNums.reduce((acc,val)=>acc+val),0);
    }
    useEffect(createDieNums,[]);
  return (
    <div className='flex flex-col w-full gap-y-4'>
    <div className='flex flex-row gap-x-4 mt-4'>
        {
            dieNums.map((num,i)=>{
                return <Dice key={i} diceNum={num} />
            })
        }
    </div>
    <button className='text-2xl' onClick={createDieNums}>Roll Up !</button>
    <div className={sum===result?'bg-green-500 p-4 rounded-lg text-2xl font-semibold':'bg-black bg-opacity-40 p-4 rounded-lg text-2xl font-semibold'}>{
        sum===result?`You Won!!!!`:"Try Again, Roll Up..."
        }</div>
    </div>
  )
}

export default DiceRoller