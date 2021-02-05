import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from './components/Shared/Layout/Layout';
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharacterPageDetail from './pages/CharactersDetail/CharacterPageDetail';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/characters" component={CharactersPage}></Route>
          <Route path='/character/:id' component={CharacterPageDetail}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
