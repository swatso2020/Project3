import React from 'react';
import logo from './logo.png';
import "./style.css";

const SignUpForm = (props) => {

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
                        <input type="email" className="form-control" id="email-input" placeholder="Email" />
                        <label for="exampleInputPassword">Password:</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password" />
                        <button type="submit" className="btn btn-success signupBTN">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>

    </div>

}
export default SignUpForm;