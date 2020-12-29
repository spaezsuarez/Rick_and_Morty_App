import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./containers/Layout/Layout";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Characters from "./containers/Characters";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/characthers" component={Characters}></Route>
          <Route component={Error}> </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
