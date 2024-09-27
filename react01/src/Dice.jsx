import React from 'react'

function Dice({diceNum}) {
  return (
    <div className='bg-red-800 rounded-lg border-2 border-white border-opacity-60 shadow-lg p-9 px-11'>
        <h2 className='text-2xl text-white'>
        {diceNum}
        </h2>
    </div>
  )
}

export default Dice