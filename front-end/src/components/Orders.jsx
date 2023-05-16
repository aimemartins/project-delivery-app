import React from 'react';
import PropTypes from 'prop-types';

export default function Orders({ id, status, saleDate, totalPrice, deliveryAddress }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const objUser = JSON.parse(localStorage.getItem('user'));
    setUser(objUser);
  }, []);
  if (user.role === 'customer') {
    return (
      <div>
        <h2 data-testid={ `customer_orders__element-order-id-${id}` }>{id}</h2>
        <h2 data-testid={ `customer_orders__element-delivery-status-${id}` }>{status}</h2>
        <br />
        <h2 data-testid={ `customer_orders__element-order-date-${id}` }>{saleDate}</h2>
      </div>
    );
  }
  if (user.role === 'seller') {
    return (
      <div>
        <h2 data-testid={ `seller_orders__element-order-id-${id}` }>{id}</h2>
        <h2 data-testid={ `seller_orders__element-delivery-status-${id}` }>{status}</h2>
        <br />
        <h2 data-testid={ `seller_orders__element-order-date-${id}` }>{saleDate}</h2>
        <h2 data-testid={ `seller_orders__element-card-price-${id}` }>{totalPrice}</h2>
        <h2 data-testid={ `seller_orders__element-card-address-${id}` }>
          {deliveryAddress}
        </h2>
      </div>
    );
  }
}

Orders.defaultProps = {
  deliveryAddress: null,
};

Orders.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string,
};
