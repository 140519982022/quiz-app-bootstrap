import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function PlayQuiz() {
    return (
        <>
            <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg'>
                        <form>
                            <button type="submit" className="btn btn-secondary fw-bold form-control mb-3 fs-3">Play Quiz</button>
                            <AllQuizz></AllQuizz>
                            <AllQuizz></AllQuizz>
                            <AllQuizz></AllQuizz>


                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

function AllQuizz() {
    return (
        <>
            <div className="form-group">
                <input type="text" className="form-control mb-3 bg-white text-dark border border-0 fs-4" value={'1. hmmmm'} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={'hmmmm'} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={'hmmmm'} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={'hmmmm'} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={'hmmmm'} />

                <div className='border border-5'> </div>
            </div>
        </>
    )

}
