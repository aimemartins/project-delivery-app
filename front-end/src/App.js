import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import CustumerProducts from './pages/CustomerProducts';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/customer/products" component={ CustumerProducts } />
    </Switch>
  );
}

export default App;
