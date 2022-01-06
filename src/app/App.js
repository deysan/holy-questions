import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Questions from './layouts/Questions';
import Results from './layouts/Results';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Questions} />
        <Route path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
