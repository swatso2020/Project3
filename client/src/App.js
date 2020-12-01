import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Places from "./pages/Places"
//import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Places />
           
            
            <NoMatch />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
