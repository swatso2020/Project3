import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { Icon } from 'semantic-ui-react';
import "./style.css";

function SearchNavTab() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="nav-item"><Link to="/myplaces" className={window.location.pathname === "/myplaces" ? "nav-link active" : "nav-link"}>
            My places</Link></div>
          <div className="top-bar text-center u-text-centered">
            <img className="logo" src={logo} />
            <p className="navBarText">Places to Go</p>
          </div>
          <Icon link name='sign-out' className='sign-out logout'><a class="navBarText logout" href="/logout">Logout</a></Icon>
        </div>
      </nav>
    </div>
  );
}

export default SearchNavTab;
