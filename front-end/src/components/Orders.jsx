import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Orders({ id, status, saleDate, totalPrice, deliveryAddress }) {
  const [user, setUser] = useState({});
  const newDate = new Intl.DateTimeFormat('pt-BR').format(new Date(saleDate));

  useEffect(() => {
    const objUser = JSON.parse(localStorage.getItem('user'));
    setUser(objUser);
  }, []);
  if (user.role === 'customer') {
    return (
      <Link
        to={ `/customer/orders/${id}` }
      >
        <div>
          <h2 data-testid={ `customer_orders__element-order-id-${id}` }>{id}</h2>
          <h2
            data-testid={ `customer_orders__element-delivery-status-${id}` }
          >
            {status}
          </h2>
          <br />
          <h2 data-testid={ `customer_orders__element-order-date-${id}` }>{newDate}</h2>
          <h2
            data-testid={ `customer_orders__element-card-price-${id}` }
          >
            {totalPrice.replace('.', ',')}
          </h2>
        </div>
      </Link>
    );
  }
  if (user.role === 'seller') {
    return (
      <Link
        to={ `/seller/orders/${id}` }
      >
        <div>
          <h2 data-testid={ `seller_orders__element-order-id-${id}` }>{id}</h2>
          <h2 data-testid={ `seller_orders__element-delivery-status-${id}` }>{status}</h2>
          <br />
          <h2 data-testid={ `seller_orders__element-order-date-${id}` }>{newDate}</h2>
          <h2 data-testid={ `seller_orders__element-card-price-${id}` }>
            {totalPrice.replace('.', ',')}
          </h2>
          <h2 data-testid={ `seller_orders__element-card-address-${id}` }>
            {deliveryAddress}
          </h2>
        </div>
      </Link>
    );
  }
  return (
    <p>Loading</p>
  );
}

Orders.defaultProps = {
  deliveryAddress: null,
};

Orders.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string,
};
