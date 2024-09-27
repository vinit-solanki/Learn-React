import React from 'react'
import { useState } from 'react'
function ScoreKeeper({numPlayers,goal}) {
    const [scores, setScores] = useState(Array(numPlayers).fill(0));
    const incrementScore = (id)=>{
        setScores(
            (prev)=>{
                return prev.map((score,i)=>{
                    if(i===id) {
                        const newScore = score+1;
                        if(newScore>=goal){
                            setIsWin((prev)=>prev.map((win,j)=>j===id?true:win));
                        }
                        return score+1;
                    }
                    else return score;
                })
            }
        );
    }
    const resetButtton = ()=>{
        setScores(Array(numPlayers).fill(0));
        setIsWin(Array(numPlayers).fill(false));
    }
  const [isWin,setIsWin] = useState(Array(numPlayers).fill(false));
  return (
    <div className='p-2 flex flex-col gap-y-2'>
        {
            scores.map((score,id)=>{
                return (
                    <div key={id} className='flex flex-row gap-x-3 justify-center align-center items-center'>
                        <h2 className='bg-black p-2 px-3 rounded-lg text-white'>Player-{id+1} | {score}</h2>
                        <button onClick={()=>incrementScore(id)} >+ 1</button>
                        <div className={isWin[id]?'text-green-400 font-bold bg-black bg-opacity-30 p-2':"text-red-400 font-bold opacity-30 bg-black p-2 rounded-lg"}>Player {id} Win!!    
                        </div>
                    </div>
                )
            })
        }
        <button onClick={resetButtton}>Reset</button>
    </div>
  )
}

export default ScoreKeeper