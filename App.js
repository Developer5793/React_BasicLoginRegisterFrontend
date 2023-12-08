import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import LoginReact from './components/login.component'
import SignUp from './components/signup.component'
import SignUpValidation from './components/signupvalidation.component'
import SignUpConfirmation from './components/signupconfirm.component'
import ResetPassword from './components/resetpassword.component'


function App() {
 
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={'/sign-in'}>
                            positronX
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/sign-in'}>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/sign-up'}>
                                        Sign up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Routes>
                                <Route path="/" element={<Navigate replace to="/signin" />} />
                            {/* <Route exact path="/" element={<Login />} /> */}
                                <Route path="/signin" element={<LoginReact />} />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/signupval" element={<SignUpValidation />} />   
                                <Route path="/signupconfirm" element={<SignUpConfirmation />} />   
                                <Route path="/resetpw" element={<ResetPassword />} />   

                            {/* <Navigate from="/" to="/login" /> */}

                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}
export default App