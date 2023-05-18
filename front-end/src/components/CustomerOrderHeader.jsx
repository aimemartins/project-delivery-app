import React from 'react';
import PropTypes from 'prop-types';

export default function CustomerOrderHeader({ sale }) {
  const {
    id,
    seller,
    date,
    status,
  } = sale;
  const newDate = new Intl.DateTimeFormat('pt-BR').format(new Date(date));

  const statDTest = 'customer_order_details__element-order-details-label-delivery-status';
  return (
    <table>
      <thead>
        <tr>
          <th data-testid="customer_order_details__element-order-details-label-order-id">
            PEDIDO
            {' '}
            {id}
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vendedora:
            {' '}
            {seller}

          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {newDate}

          </th>
          <th
            data-testid={ statDTest }
          >
            {status}

          </th>
          <th>
            <button
              type="button"
              onClick={ () => handleClick() }
              disabled
              data-testid="customer_order_details__button-delivery-check"
            >
              ENTREGUE
            </button>

          </th>
        </tr>
      </thead>
    </table>
  );
}

CustomerOrderHeader.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
