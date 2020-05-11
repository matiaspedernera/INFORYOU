import React from 'react';
import Home from './pages/home';
import LatestNews from './pages/latest-news';
import Comments from './pages/comments';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/ultimasnoticias" component={LatestNews}/>
        <Route path="/comentarios" component={Comments}/>
      </Switch>
    </Router>
  );
}

export default App;
