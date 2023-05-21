import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import InputAddress from '../components/InputAddress';
import CheckoutList from '../components/CheckoutList';
import { requestLogin } from '../services/requests';

function CustomerCheckout() {
  const history = useHistory();
  async function postSale() {
    const post = {
      userId: JSON.parse(localStorage.getItem('user')).id,
      sellerId: Number(JSON.parse(localStorage.getItem('seller'))),
      totalPrice: Number(JSON.parse(localStorage.getItem('totalPrice'))),
      deliveryAddress: JSON.parse(localStorage.getItem('deliveryAddress')),
      deliveryNumber: JSON.parse(localStorage.getItem('deliveryNumber')),
      status: 'Pendente',
      cart: JSON.parse(localStorage.getItem('cart')),
    };
    try {
      const result = await requestLogin('/sales', post);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async function finalizeOrder() {
    const post = await postSale();
    history.push(`/customer/orders/${post.id}`);
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      <Header />
      <div>
        <CheckoutList />
      </div>
      <div>
        <InputAddress />
        <button
          type="button"
          onClick={ () => finalizeOrder() }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default CustomerCheckout;
