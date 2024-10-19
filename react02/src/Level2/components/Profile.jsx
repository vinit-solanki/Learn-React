import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext)
  if(!user) return <h2>Please Login.</h2>
  return (
    <div className='text-2xl font-semibold'>
        <h2>Welcome, {user.username}!</h2>
    </div>
  )
}

export default Profile