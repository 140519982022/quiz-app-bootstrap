import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { getDatabase, ref, set } from "firebase/database";
import app from '../FirebaseConfic'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

    let formHandler = (e) => {

        e.preventDefault()

        let resultObj = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        let userId = uuidv4();
        const db = getDatabase(app);
        set(ref(db, 'registered_users/' + userId), resultObj);
        toast.success("You Have Registered Successfully!!!!")

    }

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
