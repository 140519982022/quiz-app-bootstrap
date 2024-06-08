import React, { useContext, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../FirebaseConfic'
import { ToastContainer, toast } from 'react-toastify';
import { RunMainContext } from './MainContext';
import { useNavigate } from 'react-router-dom';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export default function Login() {
    const provider = new GoogleAuthProvider();

    let navigator = useNavigate()
    const auth = getAuth(app);
    let {user,setUser} = useContext(RunMainContext)

    let loginHandeler = (event) => {

        event.preventDefault()
        let email = event.target.email.value
        let password = event.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.accessToken)
                setUser(user.accessToken)
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)

            });

    }

    useEffect(()=>{
        if (user !== '') {
            
            navigator('/play-quize')
        }

        if (user == '') {
            
            navigator('/')
        }



    },[user])

    let googleLogin=()=>{

        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        //   console.log(user)
          setUser(user.accessToken)
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });


    }

    return (
        <>
            <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                    <ToastContainer />

                        <form onSubmit={loginHandeler}>
                            <h1 className='fw-bold pb-5 text-danger'>Login Here</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className='fw-bold pb-2'>Email address</label>
                                <input type="email" className="form-control mb-3" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-2'>Password</label>
                                <input type="password" className="form-control" name='password' placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                            </div>
                            <button type="submit" className="btn btn-success fw-bold me-5 px-5">Login</button>
                            <button type="button" className="btn btn-warning fw-bold " onClick={googleLogin}>Login with google</button>

                        </form>

                    </div>

                </div>

            </div>
            <Footer></Footer>
        </>
    )
}
