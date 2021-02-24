import React from "react";
import 'bootswatch/dist/superhero/bootstrap.min.css';

import Layout from './components/Shared/Layout/Layout';
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharacterPageDetail from './pages/CharactersDetail/CharacterPageDetail';
import EpisodesPage from './pages/EpisodesPage/EpisodesPage';
import EpisodePageDetail from './pages/EpisodeDetailPage/EpisodeDetailPage';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import LocationPageDetail from './pages/LocationPageDetail/LocationPageDetail';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/characters" component={CharactersPage}></Route>
          <Route exact path='/character/:id' component={CharacterPageDetail}></Route>
          <Route exact path='/episodes' component={EpisodesPage}></Route>
          <Route exact path='/episode/:idEp' component={EpisodePageDetail}></Route>
          <Route exact path='/locations' component={LocationsPage}></Route>
          <Route exact path='/location/:id' component={LocationPageDetail}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
