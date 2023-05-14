import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AllOrders from './pages/AllOrders';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/register" component={ Register } />
      <Route exact path="/admin/manage" component={ Admin } />
      <Route path="/customer/products" component={ CustumerProducts } />
      <Route exact path="/customer/orders" component={ AllOrders } />
      <Route exact path="/seller/orders" component={ AllOrders } />
    </Switch>
  );
}

export default App;
