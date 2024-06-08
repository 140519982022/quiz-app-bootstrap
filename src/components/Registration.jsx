import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
// import { getDatabase, ref, set } from "firebase/database";
import app from '../FirebaseConfic'
// import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    let navigator = useNavigate()
    const auth = getAuth(app);
    let [user,setUser] = useState(null)

    let formHandler = (e) => {
       

        e.preventDefault()

        let email = e.target.email.value
        let password = e.target.password.value

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                setUser(user)
                toast.success("You Have Registered Successfully!!!!")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)

                // ..
            });


        // let resultObj = {
        //     email: e.target.email.value,
        //     password: e.target.password.value
        // }
        // let userId = uuidv4();
        // const db = getDatabase(app);
        // set(ref(db, 'registered_users/' + userId), resultObj);
        // toast.success("You Have Registered Successfully!!!!")

    }
    useEffect(()=>{

        if (user !== null) {
            setTimeout(()=>{
                navigator('/')
            },2000)
            
        }

    },[user])

    return (
        <>
            <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                        <form onSubmit={formHandler}>
                            <ToastContainer />
                            <h1 className='fw-bold pb-5 text-danger'>Register Here</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className='fw-bold pb-2'>Email address</label>
                                <input type="email" name='email' className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-2'>Password</label>
                                <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                            </div>
                            <button type="submit" className="btn btn-success fw-bold ">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
