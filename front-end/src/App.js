import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SellerOrders from './pages/SellerOrders';
import Login from './pages/Login';
import CustumerProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import Admin from './pages/Admin';
import OrderDetailsPage from './pages/OrderDetailsPage';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/register" component={ Register } />
      <Route exact path="/admin/manage" component={ Admin } />
      <Route exact path="/customer/products" component={ CustumerProducts } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
      <Route exact path="/seller/orders/:id" component={ OrderDetailsPage } />
    </Switch>
  );
}

export default App;
