import React, { useEffect, useState } from 'react';
import Orders from '../components/Orders';
import { requestData } from '../services/requests';
import Header from '../components/Header';

export default function AllOrders() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const objUser = JSON.parse(localStorage.getItem('user'));
    setUser(objUser);
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let myOrders = [];

        if (user.role === 'customer') {
          myOrders = await requestData(`/customer/sales/${user.id}`);
        } else if (user.role === 'seller') {
          myOrders = await requestData(`/seller/sales/${user.id}`);
        }

        setOrders(myOrders);
        setFetchError(false);
      } catch (e) {
        console.log(e.message);
        setFetchError(true);
      }
    };

    if (user.id) {
      fetchOrders();
    }
  }, [user]);

  const getComponent = (e) => (
    <Orders
      key={ e.id }
      id={ e.id }
      status={ e.status }
      saleDate={ e.saleDate }
      totalPrice={ e.totalPrice }
    />
  );

  if (user.role === 'customer' || user.role === 'seller') {
    return (
      <>
        <Header />
        {fetchError && (
          <p>
            Os dados informados não estão corretos. Por favor, tente novamente.
          </p>
        )}
        {orders && orders.map((e) => getComponent(e))}
      </>
    );
  }

  return <p>Loading</p>;
}
