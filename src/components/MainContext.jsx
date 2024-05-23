import React, { createContext, useState } from 'react'


export  let RunMainContext = createContext()

export default function MainContext({children}) {
    
    // let [playQuizData,setPlayQuizData] = useState([])
    // let obj = {playQuizData,setPlayQuizData}
  
  return (
    <>
        <RunMainContext.Provider >
            
            <div>
                {children}
            </div>
            
        </RunMainContext.Provider>
    </>
  )
}
