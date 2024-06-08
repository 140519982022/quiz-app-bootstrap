import React, { createContext, useEffect, useState } from 'react'


export let RunMainContext = createContext()

export default function MainContext({ children }) {

  let [user, setUser] = useState(localStorage.getItem('token') ?? '')

  useEffect(() => {
    localStorage.setItem('token', user)
    
  }, [user])
  
  let [totalQue,setTotalQue] = useState(localStorage.getItem('totalQue') ?? 0)

  useEffect(() => {
    localStorage.setItem('totalQue', totalQue)
    
  }, [totalQue])

  const contextValue = {
    user,
    setUser,
    totalQue,
    setTotalQue
  }


  return (
    <>
      <RunMainContext.Provider value={contextValue}>

        <div>
          {children}
        </div>

      </RunMainContext.Provider>
    </>
  )
}
