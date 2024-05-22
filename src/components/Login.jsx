import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function Login() {
    return (
        <>
        <Header></Header>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='w-50 mx-auto p-5 m-5 shadow-lg p-3 bg-body rounded border'>
                        <form>
                            <h1 className='fw-bold pb-5 text-danger'>Login Here</h1>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className='fw-bold pb-2'>Email address</label>
                                <input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className='fw-bold pb-2'>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
                                {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
                            </div>
                            <button type="submit" className="btn btn-success fw-bold ">Login</button>
                        </form>

                    </div>

                </div>

            </div>
<Footer></Footer>
        </>
    )
}
