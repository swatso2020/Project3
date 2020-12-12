import React, { useState } from 'react';
import API from '../../utils/API';
import logo from './logo.png';
import photo from './support-local.jpg';
import { Link } from 'react-router-dom';
import "./style.css";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async () => {
        if (!email) {
            alert("Please enter your email address");
        } else if (!password) {
            alert("Please enter your account password");
        } else {
            try {
                const response = await API.logIn(email, password);
                props.onLogIn(response.data);
            } catch (error) {
                alert("Invalid credentials!");
            }
        }
    }

    return <div>
        <div className="LoginSignup">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container-fluid">
                            <div className="top-bar text-center u-text-centered">
                                <img className="photo" src={photo} />
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="card">
                            <div className="card-body">
                                <div className="top-bar text-center u-text-centered">
                                    <img className="logo" src={logo} />
                                </div>
                                <hr />
                                <form className="login">
                                    <div className="form-group">
                                        <label for="exampleInputEmail">Email Address:</label>
                                        <input type="email" className="form-control" id="email-input" placeholder="Email" type="email" value={email} onChange={e => {
                                            setEmail(e.target.value);
                                        }} />
                                        <label for="exampleInputPassword">Password:</label>
                                        <input type="password" className="form-control" id="password-input" placeholder="Password" value={password} onChange={e => {
                                            setPassword(e.target.value);
                                        }} type="password" />
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-success loginBTN" onClick={logIn}>Log in</button>
                                            <br />
                                            <button type="submit" className="btn btn-info" id="createAccountBTN"><Link to="/signup" id="createAccountBTN" className={window.location.pathname === "/signup"}>
                                                Create New Account</Link></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="footer text-center">
           
        </div>
    </div>

}
export default LoginForm;