import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Questions from './layouts/Questions';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Questions} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
