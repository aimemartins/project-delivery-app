import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { requestData, requestUpdate } from '../services/requests';

export default function HeaderOrderDetail(props) {
  const [newStatus, setNewStatus] = useState('');
  const [disabledPreparing, setDisabledPreparing] = useState(false);
  const [disabledDispatch, setDisabledDispatch] = useState(true);
  const { id, saleDate, status } = props;
  // const dateSaleBrazil = new Intl.DateTimeFormat('pt-BR').format(new Date(saleDate));

  async function StatusPending() {
    await requestUpdate(`/sales/${id}`, { id, status: 'Pendente' });
    const result = await requestData(`/sales/${id}`);
    setNewStatus(result.status);
    setDisabledPreparing(false);
    setDisabledDispatch(true);
  }

  async function StatusPreparing() {
    await requestUpdate(`/sales/${id}`, { id, status: 'Preparando' });
    const result = await requestData(`/sales/${id}`);
    setNewStatus(result.status);
    setDisabledPreparing(true);
    setDisabledDispatch(false);
  }

  async function StatusDispatch() {
    await requestUpdate(`/sales/${id}`, { id, status: 'Em Trânsito' || 'Entregue' });
    const result = await requestData(`/sales/${id}`);
    setNewStatus(result.status);
    setDisabledPreparing(true);
    setDisabledDispatch(true);
  }

  return (
    <section>
      <div data-testid="seller_order_details__element-order-details-label-order-id">
        <h1>
          Pedido:
          {id}
        </h1>
      </div>
      <div data-testid="seller_order_details__element-order-details-label-order-date">
        <h1>{ saleDate }</h1>
      </div>
      <div>
        <h1>
          {newStatus || status}
        </h1>
      </div>
      <div>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ disabledPreparing }
          onClick={ () => StatusPreparing() }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ disabledDispatch }
          onClick={ () => StatusDispatch() }
        >
          SAIU PARA ENTREGA
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          // disabled={ disabledDispatch }
          onClick={ () => StatusPending() }
        >
          pendente
        </button>
      </div>
    </section>

  );
}

HeaderOrderDetail.propTypes = {
  id: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
//   totalPrice: PropTypes.string.isRequired,
//   deliveryAddress: PropTypes.string.isRequired,
//   deliveryNumber: PropTypes.string.isRequired,
};
