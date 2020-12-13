import React from 'react';
import API from "../../utils/API";
import { render } from 'react-dom';
import logo from './logo.png';
import "./style.css";




class SignUpForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {email: '',
                    password:''};

  
      //this.handleInputChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleSubmit.bind(this);
    }
  
  
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleFormSubmit = event => {
        event.preventDefault()
       API.createUser(this.state.email)
        
            // .then(res => {
            //     this.setState

              

            // })
            .catch(err => console.log(err))
           
    };
  
    render() {
      
      return (
       <div>
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
                        <input name="email" value ={this.state.email} onChange = {this.handleInputChange} type="email" className="form-control" id="email-input" placeholder="Email" />
                        <label for="exampleInputPassword">Password:</label>
                        <input name ="password" value = {this.state.password}  onChange = {this.handleInputChange} type="password" className="form-control" id="password-input" placeholder="Password" />
                        <button  onClick={this.handleFormSubmit} type="submit" className="btn btn-success signupBTN">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
      );
    }
  }
// const SignUpForm = (props) => {
// //     this.state = {
// //         email:"",
// //         password:""
// //     }
// // onChangeEmail(e){
// //     this.state({
// // email: e.target.value
// //     })
// // }

//      handleInputChange(e) {
//     this.setState({value: e.target.value});
//   }

//     return <div>

//         <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//                 <div></div>
//                 <div className="top-bar text-center u-text-centered">
//                     <img className="logo" src={logo} />
//                     <p className="navBarText">Places to Go</p>
//                 </div>
//                 <div></div>
//             </div>
//         </nav>
//         <div className="container">
//             <div className="card">
//                 <div className="card-body">
//                     <h2>Sign Up</h2>
//                     <hr />
//                     <form className="signup">
//                         <label for="exampleInputEmail">Email Address:</label>
//                         {/* <input name="email" value={this.state.email} onChange = {this.handleInputChange} type="email" className="form-control" id="email-input" placeholder="Email" />
//                         <label for="exampleInputPassword">Password:</label>
//                         <input name ="password" value = {this.state.password} onChange = {this.handleInputChange} type="password" className="form-control" id="password-input" placeholder="Password" />
//                         <button type="submit" className="btn btn-success signupBTN">Sign Up</button> */}
//                     </form>
//                 </div>
//             </div>
//         </div>

//     </div>

// }
export default SignUpForm;

    