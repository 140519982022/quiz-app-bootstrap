import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function AddQuiz() {
    return (
        <>
            <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 border border-black shadow-lg'>
                        <form>
                            <h1 className='fw-bold pb-5 text-danger'>Add Quiz</h1>
                            <div className="form-group">
                                <textarea name="queation" id="queation" className="form-control mb-3" rows={4} placeholder='Write Your Quastion'></textarea>

                                <input type="text" className="form-control mb-3" placeholder="Question 1" />

                                <input type="text" className="form-control mb-3" placeholder="Question 2" />

                                <input type="text" className="form-control mb-3" placeholder="Question 3" />

                                <input type="text" className="form-control mb-3" placeholder="Question 4" />

                                <input type="text" className="form-control mb-3" placeholder="Correct Ans" />
                            </div>

                            <button type="submit" className="btn btn-secondary fw-bold form-control mb-3">Add Quiz</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}
