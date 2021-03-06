import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';
import SearchPlaces from '../pages/SearchPlaces';
import MyPlaces from '../pages/MyPlaces';

const PublicRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/signup" component={SignUpPage} />


            <Route exact={true} path="/search" component={SearchPlaces} />
            <Route exact={true} path="/myplaces" component={MyPlaces} />
            <Redirect to="/login" />
        </Switch>
        </Router>
}
export default PublicRoutes;
