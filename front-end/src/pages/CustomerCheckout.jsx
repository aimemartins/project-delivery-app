import React from 'react';
import Header from '../components/Header';
import InputAddress from '../components/InputAddress';
import CheckoutList from '../components/CheckoutList';
// import CheckoutList from '../components/CheckoutList';

function CustomerCheckout() {
  return (
    <div>
      <Header />
      <CheckoutList />
      <InputAddress />
    </div>
  );
}

export default CustomerCheckout;
