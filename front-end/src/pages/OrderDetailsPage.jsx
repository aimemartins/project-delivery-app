import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderOrderDetail from '../components/HeaderOrderDetail';
import Header from '../components/Header';
import { requestData } from '../services/requests';
import SellerOrderDetails from '../components/SellerOrderDetails';

export default function OrderDetailsPage() {
  const { id } = useParams();
  console.log('pathname', id);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const getorder = () => {
    requestData(`/customer/orders/${id}`)
      .then((result) => setOrders(result)).finally(() => setLoading(false));
  };
  // const getSaleProducts = () => {
  //   requestData(`/sale/products/${id}`)
  //     .then((result) => setOrders(result)).finally(() => setLoading(false));
  // };
  console.log(orders);
  useEffect(() => getorder(), []);
  // useEffect(() => getSaleProducts(), []);
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        { loading ? <p> Loading...</p>
          : <HeaderOrderDetail { ... orders } />}

      </div>
      <div>
        <SellerOrderDetails />
      </div>
    </section>
  );
}
