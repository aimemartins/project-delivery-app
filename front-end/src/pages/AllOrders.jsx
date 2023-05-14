import React, { useEffect, useState } from 'react';
import Orders from '../components/Orders';
import { requestData } from '../services/requests';

// TA DANDO ERROR
export default function AllOrders() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const objUser = JSON.parse(localStorage.getItem('user'));
    setUser(objUser);
  }, []);

  const getCustomerOrders = async () => {
    try {
      const myOrders = await requestData(`/customer/sales/${user.id}`);
      setOrders(myOrders);
      setFetchError(false);
    } catch (e) {
      console.log(e.message);
      setFetchError(true);
    }
  };

  const getSellerOrders = async () => {
    try {
      const myOrders = await requestData(`/seller/sales/${user.id}`);
      setOrders(myOrders);
      setFetchError(false);
    } catch (e) {
      console.log(e.message);
      setFetchError(true);
    }
  };

  const getComponent = (e) => (
    <Orders
      key={ e.id }
      id={ e.id }
      status={ e.status }
      saleDate={ e.saleDate }
      totalPrice={ e.totalPrice }
    />
  );

  if (user.role === 'customer') {
    getCustomerOrders();
    return (
      <>
        {
          (fetchError)
            ? (
              <p>
                {
                  `Os dados informados não estão corretos.
                  Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }
        {
          (!orders) ? ''
            : orders.map((e) => getComponent(e))
        }
      </>
    );
  }

  if (user.role === 'seller') {
    getSellerOrders();
    return (
      <>
        {
          (fetchError)
            ? (
              <p>
                {
                  `Os dados informados não estão corretos.
                  Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }
        {
          (!orders) ? ''
            : orders.map((e) => getComponent(e))
        }
      </>
    );
  }
  return (
    <p>ERROR</p>
  );
}
