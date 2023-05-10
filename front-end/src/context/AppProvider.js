import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { requestData } from '../services/requests';

export default function AppProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    requestData('/users').then((result) => setUsers(result));
  }, []);

  const values = useMemo(() => ({
    users,
  }), [
    users,
  ]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
