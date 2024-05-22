import React, { createContext } from 'react'


export  let RunMainContext = createContext()
export default function MainContext({children}) {
  return (
    <>
        <RunMainContext.Provider>
            <div>
                {children}
            </div>
            
        </RunMainContext.Provider>
    </>
  )
}
