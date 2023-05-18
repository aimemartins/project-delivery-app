import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestUpdate, requestData } from '../services/requests';

export default function HeaderOrderDetail(props) {
  const [newStatus, setNewStatus] = useState('');
  const [disabledPreparing, setDisabledPreparing] = useState(false);
  const [disabledDispatch, setDisabledDispatch] = useState(true);
  const { id, saleDate, status } = props;
  const dateSaleBrazil = new Intl.DateTimeFormat('pt-BR').format(new Date(saleDate));

  async function StatusPreparing() {
    await requestUpdate(`/sales/${id}`, { id, status: 'Preparando' });
    const result = await requestData(`/sales/${id}`);
    setNewStatus(result.status);
    setDisabledPreparing(true);
    setDisabledDispatch(false);
  }

  async function StatusDispatch() {
    await requestUpdate(`/sales/${id}`, { id, status: 'Em Trânsito' });
    const result = await requestData(`/sales/${id}`);
    setNewStatus(result.status);
    setDisabledPreparing(true);
    setDisabledDispatch(true);
  }

  useEffect(() => {
    if (status === 'Entregue') {
      setDisabledPreparing(true);
      setDisabledDispatch(true);
    } if (status === 'Preparando') {
      setDisabledPreparing(true);
      setDisabledDispatch(false);
    }
  }, []);

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
        <h1
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
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
      </div>
    </section>

  );
}

HeaderOrderDetail.propTypes = {
  id: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
