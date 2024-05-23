import React, { useContext, useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { getDatabase, ref, onValue } from "firebase/database";

import app from '../FirebaseConfic'
// import { RunMainContext } from './MainContext';

export default function PlayQuiz() {

    
    const db = getDatabase(app);
    
    let [playQuizData,setPlayQuizData] = useState([])

    useEffect(()=>{
        const quizReferance = ref(db, 'quiz_added/');

        onValue(quizReferance, (snapshot) => {
            let data = snapshot.val();
            let quationsArr = []
            for(let key in data){

                let finalQuizData = data[key]
                quationsArr.push(finalQuizData)
            }
            
            setPlayQuizData(quationsArr)
            
        });

    },[])

    console.log(playQuizData)

    return (
        <>
            <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg'>
                        <form>
                            <button type="submit" className="btn btn-secondary fw-bold form-control mb-3 fs-3">Play Quiz</button>

                            {
                                playQuizData.length >=1 ?
                                
                                playQuizData.map((item,index) =><AllQuizz item={item}/>
                                
                                )
                                
                                
                                :

                                "no quiz is generated"
                            }
                          


                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

function AllQuizz({item}) {
    return (
        <>
            <div className="form-group">
                <input type="text" className="form-control mb-3 bg-white text-dark border border-0 fs-4" value={item.question} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={item.option1} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={item.option2} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={item.option3} />

                <input type="text" className="form-control mb-3 bg-primary text-white" value={item.correctAns} />

                <div className='border border-5'> </div>
            </div>
        </>
    )

}
