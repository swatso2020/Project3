import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { Icon } from 'semantic-ui-react';
import "./style.css"


function SearchPlaces(props) {
  const [Places, setPlaces] = useState({})

 
  // const {} = useParams()
  // useEffect(() => {
  //   API.getBook()
  //     .then(res => setPlace(res.data))
  //     .catch(err => console.log(err));
  // }, [])


  return (
    <div>
    <nav className="navbar navbar-default">
        <div className="container-fluid">
        <div><Link to="/dashboard">My places</Link></div>   
            <div className="top-bar text-center u-text-centered">
                <img className="logo" src={logo} />
                <p className="navBarText">Places to Go</p>
            </div>
            <Icon link name='sign-out' className='sign-out'><a class="navBarText logout" href="/logout">Logout</a></Icon>
        </div>
    </nav>
    
    <div className="container-fluid placesSearchContainter justify-content-center ">
    <div className="row col-12">
        <span className="brand">
            <h1> </h1>
        </span>
    </div>
    <div className="ui action input">
        <form>
        <div className="input-group mb-3" style={{textAlign: "center"}}>
           <input type="text" style={{width: "400px", height:"35px"}} className="form-control margin" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
           
           <button type="button" style={{height:"35px"}} className="btn btn-success margin">Search</button>
        </div>
        </form>
    </div>
</div>



</div>
      
    );
  }


export default SearchPlaces;



