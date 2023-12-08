import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


export default function SignUp()
{
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

 function handleNavigation() {
     if (pwd.length >= 8 && pwd.length <= 16) {
         window.location.href = '/signupval';
     }
    }
 
    return (
        <form method='post' action='/register'>
            <h3 className="header">Sign Up</h3>
            <br></br>
            <div className="mb-3">
                <div class="regisloginlabels">
                    <label>How should we call you? (max. 20 letters)</label>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Please enter your name"
                    name="name"
                    maxlength="20"
                    required
                />
            </div>
            <div className="mb-3">
                <div class="regisloginlabels">
                    <label>Email address</label>
                </div>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Please enter your email"
                    name="email"
                    required
                />
            </div>                        
            <div className="mb-3">
                <div class="regisloginlabels">
                    <label>Password</label>
                </div>
               <div className="pass-wrapper">
                 <input
                    className="form-control"
                    name="passwordsignup"
                    placeholder="Enter password"
                    type={isRevealPwd ? "text" : "password"}
                    value={pwd}
                    onChange={e => setPwd(e.target.value)}
                    pattern="^.{8,20}$"
                    title="Password must be between eight and twenty characters."
                    required>
                  </input>
                  <i onClick={() => setIsRevealPwd(prevState => !prevState)}>{eye}</i>{" "}
                </div>
            </div>
            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        class="checkboxes"
                        className="custom-control-input"
                        id="RememberMeCheckbox"
                    />
                    <label className="custom-control-label" htmlFor="RememberMeCheckbox">Remember me

                    </label>
                </div>
            </div>
            <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onSubmit={handleNavigation}>
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered? <a href="/signin">Sign in</a>
            </p>
        </form>
    );
}
