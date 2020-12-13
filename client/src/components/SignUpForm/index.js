import React, { useState } from 'react';
import API from "../../utils/API";
import { render } from 'react-dom';
import logo from './logo.png';
import "./style.css";


const SignUpForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 
    

    function handleBTNSubmit(event) {
        API.createUser({
            email: email,
            password: password,
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        //alert("account created successfully!")
      
    };

 
    return <div>

        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div></div>
                <div className="top-bar text-center u-text-centered">
                    <img className="logo" src={logo} />
                    <p className="navBarText">Places to Go</p>
                </div>
                <div></div>
            </div>
        </nav>
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2>Sign Up</h2>
                    <hr />
                    <form className="signup">
                        <label for="exampleInputEmail">Email Address:</label>
                        <input type="email" value ={email}className="form-control" id="email-input" placeholder="Email" type="email" value={email} onChange={e => {
                                            setEmail(e.target.value); }} />
                        <label for="exampleInputPassword">Password:</label>
                        <input type="password" value ={password} className="form-control" id="password-input" placeholder="Password" value={password} onChange={e => {
                                            setPassword(e.target.value);
                                        }} type="password" />
                        <button type="submit" className="btn btn-success signupBTN"onClick ={handleBTNSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>

    </div>

}
export default SignUpForm;

    