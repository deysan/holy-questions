import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Questions from './layouts/Questions';
import Result from './layouts/Result';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Questions} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
