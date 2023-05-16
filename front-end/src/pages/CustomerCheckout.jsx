import React, { useEffect } from 'react';
import Header from '../components/Header';
import InputAddress from '../components/InputAddress';
import CheckoutList from '../components/CheckoutList';
// import { requestLogin } from '../services/requests';

function CustomerCheckout() {
  async function postSale() {
    const post = {
      userId: JSON.parse(localStorage.getItem('user')).id,
      sellerId: Number(JSON.parse(localStorage.getItem('seller'))),
      totalPrice: Number(JSON.parse(localStorage.getItem('totalPrice'))),
      deliveryAddress: JSON.parse(localStorage.getItem('deliveryAddress')),
      deliveryNumber: JSON.parse(localStorage.getItem('deliveryNumber')),
      status: 'Pendente',
    };
    try {
      await requestLogin('/sales', post);
    } catch (error) {
      console.log(error);
    }
  }

  function postSaleProduct() {
    const post = {
      saleId,
      productId,
      quantity,
    };
    console.log(post);
  }
  async function finalizeOrder() {
    postSale();
    // capturar os salesId que já existem no banco e o productId e quantity do localStorage e fazer um post para cada um deles
    postSaleProduct();
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
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default CustomerCheckout;
