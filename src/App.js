import React from 'react';
import Home from './pages/home';
import Politica from './pages/politica';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/politica" component={Politica}/>
      </Switch>
    </Router>
  );
}

export default App;
