import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Home() {

    const {user, setUser} = useContext(UserContext)
  return (
    <div>
        <h1>Home {user ? user : "N/A"}</h1>
    </div>
  )
}

export default Home