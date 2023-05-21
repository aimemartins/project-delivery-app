import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { requestData } from '../services/requests';

export default function AppProvider({ children }) {
  const [users, setUsers] = useState([]);
  // const [deliveryAddress, setDeliveryAddress] = useState('');
  // const [sellerId, setSellerId] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [userId, setUserId] = useState(0);

  useEffect(() => {
    requestData('/users').then((result) => setUsers(result));
  }, []);

  const values = useMemo(() => ({
    users,
    setUsers,
  }), [
    users,

  ]);

  return (
    <AppContext.Provider value={ values }>
      <div>
        { children }
      </div>
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
