import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderOrderDetail(props) {
  const { id, saleDate, status } = props;
  const dateSaleBrazil = new Intl.DateTimeFormat('pt-BR').format(new Date(saleDate));
  return (
    <section>
      <div data-testid="seller_order_details__element-order-details-label-order-id">
        <h1>
          Pedido:
          {id}
        </h1>
      </div>
      <div data-testid="seller_order_details__element-order-details-label-order-date">
        <h1>{ dateSaleBrazil }</h1>
      </div>
      <div>
        <h1>
          {status}
        </h1>
      </div>
      <div>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
        //   disabled={ disabled }
        //   onClick={ onClick }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
        //   disabled={ disabled }
        //   onClick={ onClick }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
    </section>

  );
}

HeaderOrderDetail.propTypes = {
  id: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
//   totalPrice: PropTypes.string.isRequired,
//   deliveryAddress: PropTypes.string.isRequired,
//   deliveryNumber: PropTypes.string.isRequired,
};
