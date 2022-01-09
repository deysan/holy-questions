import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Questions from 'pages/Questions';
import Results from 'pages/Results';

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

export { App };
