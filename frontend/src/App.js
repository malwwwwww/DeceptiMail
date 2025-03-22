import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/challenge" component={Challenge} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;