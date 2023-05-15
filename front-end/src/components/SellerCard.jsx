import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SellerCard(props) {
  const { id, totalPrice, saleDate, deliveryAddress, status, deliveryNumber } = props;

  const valueBr = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
  const dateSaleBrazil = new Intl.DateTimeFormat('pt-BR').format(new Date(saleDate));
  return (
    <Link
      to={ `/seller/orders/${id}` }
    >
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        <h2>{id}</h2>
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
        <h2>{status}</h2>
      </div>
      <div data-testid={ `seller_orders__element-order-date-${id}` }>
        <h2>{dateSaleBrazil}</h2>
      </div>
      <div data-testid={ `seller_orders__element-card-price-${id}` }>
        <h2>{valueBr.format(totalPrice)}</h2>
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        <h2>
          {deliveryAddress}
          ,
          {' '}
          {deliveryNumber}
        </h2>
      </div>
    </Link>
  );
}

SellerCard.propTypes = {
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};
