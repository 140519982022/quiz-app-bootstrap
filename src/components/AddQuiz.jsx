import React, { useContext } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { getDatabase, ref, set } from "firebase/database";
import app from '../FirebaseConfic';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RunMainContext } from './MainContext.jsx';




export default function AddQuiz() {

    // let {playQuizData,setPlayQuizData} = useContext(RunMainContext)
    
    
    let collectQuiz=(event)=>{
        event.preventDefault()
        
        let objQuiz = {
            question:event.target.question.value,
            option1:event.target.option1.value,
            option2:event.target.option2.value,
            option3:event.target.option3.value,
            option4:event.target.option4.value,
            correctAns:event.target.correctAns.value
        }
        
        const db = getDatabase(app);

        let userId = uuidv4();

        set(ref(db, 'quiz_added/' + userId),objQuiz)
        .then(() => {
            toast.success("Quiz Question Added Successfully!!!!");
            event.target.reset()
        })
        .catch((error) => {
            toast.error("Failed to add quiz question: " + error.message);
        });

    }

    return (
        <>
            <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 border border-black shadow-lg'>
                        <form onSubmit={collectQuiz}>
                        <ToastContainer />
                            <h1 className='fw-bold pb-5 text-danger'>Add Quiz</h1>
                            <div className="form-group">
                                <textarea name="question" id="queation" className="form-control mb-3" rows={4} placeholder='Write Your Quastion'></textarea>

                                <input type="text" name='option1' className="form-control mb-3" placeholder="Option 1" />

                                <input type="text" name='option2' className="form-control mb-3" placeholder="Option 2" />

                                <input type="text" name='option3' className="form-control mb-3" placeholder="Option 3" />

                                <input type="text" name='option4' className="form-control mb-3" placeholder="Option 4" />

                                <input type="text" name='correctAns' className="form-control mb-3" placeholder="Correct Ans like A, B, C or D" />
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
