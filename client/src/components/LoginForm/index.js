import React, { useState } from 'react';
import SignUpPage from '../../pages/SignUp';
import API from '../../utils/API';
import SignUpForm from '../SignUpForm';
import image from './logo.png';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { Icon } from 'semantic-ui-react';
import "./style.css"


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

    return ( 
        <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="top-bar text-center u-text-centered">
                    <img className="logo" src={logo} />
                    <p className="navBarText">Places to Go</p>
                </div> 
                <Icon link name='signUp' className='signUp'><a class="navBarText signUp" href="/signUp"> SignUp</a></Icon>
                </div>
            </nav>
        <hr />


        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 card card-body">
                    <h2>Login</h2>
                    <form className="login">
                    <label for="exampleInputEmail">Email Address:</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" type="email" value={email} onChange={e => {
                        setEmail(e.target.value);
                    }} />
                    <label for="exampleInputPassword">Password:</label>
                    <input type="password" className="form-control" id="password-input" placeholder="Password" value={password} onChange={e => {
                        setPassword(e.target.value);
                    }} type="password"/>
                    <button type="submit" className="btn btn-success loginBTN" onClick={logIn}>Log in</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
export default LoginForm;