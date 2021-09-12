import React from "react";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Header from "./Header";
import ContactUs from "./ContactUs";
import Product from "./Product";
import Practise from "./Practise"

function App() {
  return (
    <Router>
    <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Practise" component={Practise}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
        <Route exact path="/Product-details" component={Product} />
        <Route exact path="/404" component={NotFound}/>
        <Redirect to="/404"/>
      </Switch>
    </Router>
  );
}

export default App;
