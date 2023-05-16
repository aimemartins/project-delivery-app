import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SellerOrders from './pages/SellerOrders';
import Login from './pages/Login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import CustomerCheckout from './pages/CustomerCheckout';
import Admin from './pages/Admin';

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
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/seller/orders" component={ SellerOrders } />
    </Switch>
  );
}

export default App;
