import React from 'react';
import image from './logo.png';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import API from "../../utils/API";
import "./style.css";

const SignUpForm = (props) => {
//     //user wants to enter a value and send to DB
//     class SearchPlaces extends Component {
//         state = {
//             places: [],
//             placeSearch: ""
//         };
    
//         handleInputChange = event => {
//             const { name, value } = event.target;
//             this.setState({ [name]: value })
//         };
    
//         handleFormSubmit = event => {
//             event.preventDefault()
            
//             API.searchPlaces(this.state.placeSearch)
            
//                 .then(res => {
    
//                     this.setState({ places: res.data.businesses }, function () {
//                     })
    
//                 })
//                 .catch(err => console.log(err))
        

    return <div>

const SignUpForm = (props) => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="top-bar text-center u-text-centered">
                        <img className="logo" src={logo} />
                        <p className="navBarText">Places to Go</p>
                    </div>
                    <Icon link name='login' className='login'><a class="navBarText login" href="/login"> Login </a></Icon>
                </div>
            </nav>
        <hr />


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