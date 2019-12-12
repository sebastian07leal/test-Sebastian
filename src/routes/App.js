import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import AddUser from '../containers/AddUser.jsx';
import Listed from '../containers/Listed.jsx';
import EditUser from '../containers/EditUser.jsx';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/addUser' component={AddUser} />
      <Route exact path='/listed' component={Listed} />
      <Route exact path='/editUser' component={EditUser} />
    </Switch>
  </BrowserRouter>
);

export default App;
