import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const InputValues =
        {
            email: email,
        };
        let response = await fetch("/resetpw", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(InputValues)
        });
        if (response.status === 204) {
            setTimeout(() => {
                setToggle(!toggle);
            }, 500);
        }
        else {
            let resjson = await response.json();
            setMessage(resjson);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {toggle && (
                <div>
                    <div class="blocktext">
                        <h2 class="centered" id="header" >Don't know your password?</h2>
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <div class="regisloginlabels">
                            <label>Your email address</label>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Please enter your email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            style={{
                                borderColor: message?.nosuchuser ? 'red' : 'grey'
                            }}
                            required
                        >
                        </input>
                        {message && <div>
                            <p id="nosuchusererror">{message.nosuchuser}</p>
                        </div>
                        }
                        <p id="resetmessage"> We'll send you a link to change your password. If you still need help, please send an email to XXXXXXX </p>
                        <br></br>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" >
                            Request a password reset
                        </button>
                        <br></br>
                        <div class="blocktext" id="cancelbutton">
                        <a href="/signin">
                            <p>Cancel</p>
                            </a>          
                        </div>

                    </div>
                </div>
            )}
            {!toggle && (

                <div>
                     <div class="blocktext">
                        <h2 class="centered" id="header" >Check your email</h2>
                        <br></br>
                        <p id="instructionssend"> We have sent instructions on how to reset your password to your email adress.</p>
                        <br></br>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" onClick={() => {navigate('/signin', {replace: true }) }} >
                            Continue
                        </button>
                    </div>
                </div>)}
        </form>
    );
}


