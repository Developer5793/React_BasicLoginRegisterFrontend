import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

let home = 'http://127.0.0.1:5000/dash/home';


export default function LoginReact() {

    function handleNavigation() {
        window.location.href = home;
    }
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const [email, setEmail] = useState('');
    const [checkStatus, SetcheckStatus] = useState(null);

    const [message, setMessage] = useState(null);
    const [signupmessage, setSignupMessage] = useState(null);


    function PosTData() { }






    /*
    function getData() {
        fetch('/login')

            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMessage(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    
    useEffect(() => {
        getData();
    }, []);
    */

    return (
        <form method='post' action='/login'>
                <h3 className="header">Sign In </h3>
                {signupmessage && !message ? (<div>
                    <br></br>
                    <p id="userregisterederror"> {signupmessage.userisregistered} </p>
                    <br></br>
            </div>)
                :
            (<br></br>)}       
                    <div className="mb-3">
                    <div class="flex-container">
                         <label
                            id="SignUpInputFormLabels"
                            >Email address
                        </label>
                        <span
                            id="signupquestion"
                            >Need an account?&nbsp;
                            <a
                                 href="/signup"
                                id="signuplink"
                                 >Sign Up
                            </a> 
                        </span>
                    </div>
                        <input
                    id="mailfield"
                    type="email"
                    name="loginmailinput"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                        borderColor: message?.registererror ? 'red' : 'grey'
                    }}
                    required
                />
                {message && <div>
                    <p id="mailerror">{message.registererror}</p>
                </div>
                }
            </div>
            <div className="mb-3">
                    <div class="regisloginlabels">
                        <label>Password</label>
                    </div>
                   <div className="pass-wrapper">
                        <input
                            id="loginpw"
                            className="form-control"
                            placeholder="Enter password"
                            type={isRevealPwd ? "text" : "password"}
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                            pattern="^.{8,20}$"
                            title="Password must be between eight and twenty characters."
                            name="loginpwinput"
                            required
                        style={{
                            borderColor: message && message.pwerror ? 'red' : 'grey'
                        }}
                        />
                    <i onClick={() => setIsRevealPwd(prevState => !prevState)}>{eye}</i>{" "}                   
                </div>
                {message && <div>
                    <p id="pwerror">{message.pwerror}</p>
                </div>
                }
            </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            class="checkboxes"
                            value={checkStatus}
                            className="custom-control-input"
                            id="RememberMeCheckbox"
                            onChange={e => SetcheckStatus(e.target.checked)}
                            name="logincheckboxinput"


                        />
                        <label className="custom-control-label" htmlFor="RememberMeCheckbox">Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                <button className="btn btn-primary" type="submit"> 
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                Forgot <a href="/resetpw">Password?</a>
            </p>
        </form>

    )
}
