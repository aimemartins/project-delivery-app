import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import SellerOrder from './pages/SellerOrder';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/seller/order" component={ SellerOrder } />
    </Switch>
  );
}

export default App;
