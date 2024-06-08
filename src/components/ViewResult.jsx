import React, { useContext, useEffect } from 'react'
import { RunMainContext } from './MainContext'
import Header from './common/Header'
import { useNavigate } from 'react-router-dom'

export default function ViewResult() {
    let {user, totalQue, setTotalQue } = useContext(RunMainContext)
    let navigator = useNavigate()

    useEffect(() => {

        if (user == '') {
            navigator('/')

        }
    })

  return (
    <>
    <Header/>

    <div className='w-50 m-auto border boder-2 border-danger mt-5 text-center'>

        <h1 className='text-danger fw-bold  '> Result</h1>

        <h2>
            Total Questions: <span className='text-warning'>{totalQue}</span>
        </h2>

        <h2>
            Correct Questions: <span className='text-warning'>{totalQue}</span>
        </h2>

        <h2>
            wrong Questions: <span className='text-warning'>{totalQue}</span>
        </h2>

        <h2>
            Total Score: <span className='text-warning'>{totalQue}</span>
        </h2>
    </div>
    
    </>
  )
}
