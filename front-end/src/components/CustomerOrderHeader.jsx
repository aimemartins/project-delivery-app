import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function CustomerOrderHeader({ sale }) {
  const { id, seller, date, status } = sale;
  const [isDisabled, setIsDisabled] = useState(true);
  const [failSetStatus, setFailSetStatus] = useState(false);
  const newDate = new Intl.DateTimeFormat('pt-BR').format(new Date(date));
  const statDTest = 'customer_order_details__element-order-details-label-delivery-status';

  useEffect(() => {
    if (status === 'Em Trânsito') {
      setIsDisabled(false);
    }
  }, [status]);

  const handleClick = () => {
    try {
      console.log('oie');
      setFailSetStatus(false);
    } catch (e) {
      console.log(e);
      setFailSetStatus(true);
    }
  };
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
              disabled={ isDisabled }
              data-testid="customer_order_details__button-delivery-check"
            >
              ENTREGUE
            </button>

          </th>
        </tr>
      </thead>
      { failSetStatus ? <p>Error setting Status</p> : null }
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
