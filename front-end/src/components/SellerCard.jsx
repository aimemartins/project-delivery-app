import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SellerCard() {
  return (
    <Link
      to={ `/seller/orders/${id}` }
    >
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        <h2>id</h2>
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
        <h2>status</h2>
      </div>
      <div data-testid={ `seller_orders__element-order-date-${id}` }>
        <h2>data do pedido</h2>
      </div>
      <div data-testid={ `seller_orders__element-card-price-${id}` }>
        <h2>valor do pedido</h2>
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        <h2>endereço</h2>
      </div>
    </Link>
  );
}

SelesCard.PropTypes = {
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};
