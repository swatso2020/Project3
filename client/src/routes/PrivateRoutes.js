import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"; 
import SearchPage from '../pages/SearchPlaces';
import MyPlaces from '../pages/MyPlaces';

const PrivateRoutes=()=>{
    return <Router>
        <Switch>
            <Route exact={true} path="/search" component={SearchPage} />
            <Route exact={true} path="/myplaces" component={MyPlaces} />
            <Redirect to="/search" />
        </Switch>
        </Router>
}
export default PrivateRoutes;