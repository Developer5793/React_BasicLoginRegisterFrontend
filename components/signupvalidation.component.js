import React from 'react'

let url = 'http://127.0.0.1:5000/dash/home';



export default function SignUpValidation()
{
    return (
        <form>

       <div class="blocktext">
                <h3  id="header"> Thank you for signing up!  </h3>
            <br></br>
                <h4 id="header" class="centered"> You are logged in now.</h4>
            <br></br>
            <p> We sent a confirmation mail to your Email adress. Please confirm your email address within the next three days so that we can keep you as a user.</p>
            <br></br>
            <div className="d-grid">
                    <button type="reset" className="btn btn-primary" onClick={() => { window.location.href = url; }}>

                        Go to Home
                </button>
            </div>
        </div>
       </form>
    );
}
