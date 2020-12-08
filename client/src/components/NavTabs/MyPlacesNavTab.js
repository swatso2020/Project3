import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { Icon } from 'semantic-ui-react';

function MyPlacesNavTab() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className="nav-item"><Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search</Link></div>
                <div className="top-bar text-center u-text-centered">
                    <img className="logo" src={logo} />
                    <p className="navBarText">Places to Go</p>
                </div>
                <Icon link name='sign-out' className='sign-out'><a class="navBarText logout" href="/logout">Logout</a></Icon>
            </div>
        </nav>
    );
}

export default MyPlacesNavTab;