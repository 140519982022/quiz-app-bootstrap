import React, { useContext, useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { getDatabase, ref, onValue } from "firebase/database";

import app from '../FirebaseConfic'
import { RunMainContext } from './MainContext';
import { useNavigate } from 'react-router-dom';
// import { RunMainContext } from './MainContext';

export default function PlayQuiz() {
    let [currentQuestion, setCurrentQuestion] = useState(0)

    let { user, setUser, totalQue, setTotalQue } = useContext(RunMainContext)

    let navigator = useNavigate()
    useEffect(() => {

        if (user == '') {
            // alert("please login first....")
            navigator('/')

        }
    })

    const db = getDatabase(app);

    // final quiz data
    let [playQuizData, setPlayQuizData] = useState([])

    useEffect(() => {
        const quizReferance = ref(db, 'quiz_added/');

        onValue(quizReferance, (snapshot) => {
            let data = snapshot.val();
            let quationsArr = []
            for (let key in data) {

                let finalQuizData = data[key]
                quationsArr.unshift(finalQuizData)
            }

            setPlayQuizData(quationsArr)

        });

    }, [])


    let getAns=(queNo,userAns)=>{
        

        console.log(queNo,userAns)
        
    }


    let finalResult=()=>{

        setTotalQue(playQuizData.length)
        navigator('/view-result')
       

    }

    console.log(playQuizData);
    console.log(playQuizData.length)

    return (
        <>
            <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg'>
                        {/* <form> */}
                            <button type="submit" className="btn btn-secondary fw-bold form-control mb-3 fs-3">Play Quiz</button>

                            {
                                playQuizData.length >= 1 ?

                                    // playQuizData.map((item,index) =><AllQuizz item={item}/>

                                    // )
                                    <div className="form-group">
                                        <div className="form-control mb-3 bg-white text-dark border border-0 fs-4">
                                        {`Que.${currentQuestion+1}   ${playQuizData[currentQuestion].question}`}

                                        </div>

                                        <div className="form-control mb-3 bg-primary text-white placeholder-lg " onClick={()=>getAns(currentQuestion,playQuizData[currentQuestion].option1)}>
                                        {playQuizData[currentQuestion].option1}

                                        </div>

                                        <div className="form-control mb-3 bg-primary text-white placeholder-lg " onClick={()=>getAns(currentQuestion,playQuizData[currentQuestion].option2)}>
                                        {playQuizData[currentQuestion].option2}

                                        </div>

                                        <div className="form-control mb-3 bg-primary text-white placeholder-lg " onClick={()=>getAns(currentQuestion,playQuizData[currentQuestion].option3)}>
                                        {playQuizData[currentQuestion].option3}

                                        </div>

                                        <div className="form-control mb-3 bg-primary text-white placeholder-lg " onClick={()=>getAns(currentQuestion,playQuizData[currentQuestion].option3)}>
                                        {playQuizData[currentQuestion].option4}

                                        </div>
                                        

                                        <div className="form-control mb-3 bg-primary text-white placeholder-lg ">
                                        {playQuizData[currentQuestion].correctAns}

                                        </div>


                                        <div className='border border-5'> </div>

                                        {
                                            currentQuestion >0 ?

                                            <button className='bg-success mt-4 px-4 text-white fw-bold border-0 py-2 me-5' onClick={(event)=>{
                                                event.preventDefault();
                                                setCurrentQuestion(currentQuestion-1)
                                            }}>Previous</button>
                                            :
                                            ''
                                        }

                                        {

                                            currentQuestion < (playQuizData.length-1) ?

                                            <button className='bg-success mt-4 px-5 text-white fw-bold border-0 py-2 ' onClick={(event) => {
                                                event.preventDefault();
                                                setCurrentQuestion(currentQuestion + 1);
                                            }}>Next</button>

                                            :

                                            <button className='bg-warning mt-4 px-5 text-danger fw-bold border-0 py-2 ' onClick={finalResult}>Submit</button>
                                        }


                                    </div>


                                    :

                                    "no quiz is generated"
                            }



                        {/* </form> */}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

// function AllQuizz({ item }) {
//     return (
//         <>
//             <div className="form-group">
//                 <input type="text" className="form-control mb-3 bg-white text-dark border border-0 fs-4" value={item.question} />

//                 <input type="text" className="form-control mb-3 bg-primary text-white" value={item.option1} />

//                 <input type="text" className="form-control mb-3 bg-primary text-white" value={item.option2} />

//                 <input type="text" className="form-control mb-3 bg-primary text-white" value={item.option3} />

//                 <input type="text" className="form-control mb-3 bg-primary text-white" value={item.correctAns} />

//                 <div className='border border-5'> </div>
//             </div>
//         </>
//     )

// }
