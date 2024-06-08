import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RunMainContext from './components/MainContext'
import Registration from './components/Registration'
import Login from './components/Login'
import AddQuiz from './components/AddQuiz'
import PlayQuiz from './components/PlayQuiz'
import ViewResult from './components/ViewResult'

let allRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/register',
    element : <Registration/>
  },
  
  {
    path: '/add-quize',
    element : <AddQuiz></AddQuiz>
  },
  {
    path: '/play-quize',
    element : <PlayQuiz></PlayQuiz>
  },
  {
    path: '/view-result',
    element : <ViewResult/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RunMainContext>

      <RouterProvider router={allRoutes} />
    </RunMainContext>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
