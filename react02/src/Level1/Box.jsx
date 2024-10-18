import React, { useEffect, useState } from 'react'

function Box({isActive,toggle}) {
  return (
    <div onClick={toggle} className={isActive?'cursor-pointer px-6 py-7 bg-white bg-opacity-40 text-black rounded-lg font-bold':'cursor-pointer px-6 py-7 bg-black bg-opacity-30 rounded-lg font-bold'}>Box</div>
  )
}

export default Box