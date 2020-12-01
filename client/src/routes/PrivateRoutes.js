import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import SearchPage from '../pages/SearchPlaces';
import SavedPlaces from '../pages/SavedPlaces';

const PrivateRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/search" component={SearchPage} />
            <Route exact={true} path="/savedplaces" component={SavedPlaces} />
            <Redirect to="/search" />
        </Switch>
        </Router>
}
export default PrivateRoutes;