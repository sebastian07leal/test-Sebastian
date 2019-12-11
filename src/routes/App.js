import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import AddUser from '../containers/AddUser.jsx';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/addUser' component={AddUser} />
    </Switch>
  </BrowserRouter>
);

export default App;
