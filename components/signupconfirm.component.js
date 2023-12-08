import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';


let home = 'http://127.0.0.1:5000/dash/home';


export default function SignUpConfirmation() {

    const [message, setMessage] = useState(null);



    var erromessage_1 = "The confirmation link is invalid or has expired.";
    var errormessage_2 = 'Account already confirmed. Please login.';

    /*Handle GET Request Confirmation Mail*/
    var url_id;


    let Confirmmessage = fetch("/confirm",
    {
        method: "GET",
    });

    Confirmmessage.then(res =>
        res.json()).then(data => {
            console.log(data)
            setMessage(data);
        });


    const navigate = useNavigate();

    return (
        <form id="confirmform" action='/confirm'>
            {message ?
                (
                <div class="blocktext">
                        <h3 id="header" class="center"> {message.errormessage_confirm}</h3>
                    <br></br>
                    <div className="d-grid">
                            <button type="button" className="btn btn-primary" onClick={() => { navigate('/signin', { replace: true }) }}>
                            Login
                        </button>
                    </div>
                </div>
                )
                :
                (
                <div class="blocktext">
                    <h3 id="header" class="centered">  Thank you for confirming your email!</h3>
                    <br></br>
                    <div className="d-grid">
                        <button type="button" className="btn btn-primary" onClick={() => { window.location.href = home; }}>
                            Go to Home
                        </button>
                    </div>               
                </div>
                )
            }
        </form>
    );

}


