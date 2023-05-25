import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderOrderDetail from '../components/HeaderOrderDetail';
import Header from '../components/Header';
import { requestData } from '../services/requests';
import SellerOrderDetails from '../components/SellerOrderDetails';

export default function OrderDetailsPage() {
  const [productsArray, setProductsArray] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getorder = async () => {
    try {
      const result = await requestData(`/sales/products/${id}`);
      setOrders(result);
      console.log(result);
      const productsFilter = result.products.map((e) => ({
        name: e.name,
        price: e.price,
        quantity: e.SaleProduct.quantity,
      }));
      setProductsArray(productsFilter);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => getorder(), []);

  if (loading) {
    return (
      <h2>Loading...</h2>
    );
  }

  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <HeaderOrderDetail { ... orders } />
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        {
          productsArray.map((e, i) => (
            <SellerOrderDetails
              key={ i + 1 }
              index={ i + 1 }
              name={ e.name }
              price={ e.price }
              quantity={ e.quantity }
            />
          ))
        }
      </table>

      <h2 data-testid="seller_order_details__element-order-total-price">
        Total: R$
        {' '}
        {orders.totalPrice.replace('.', ',')}
      </h2>
    </section>
  );
}
