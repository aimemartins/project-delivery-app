import React from 'react';

export default function CustomerOrderProducts(params) {
  const {
    index,
    name,
    price,
    quantity,
  } = params;

  return (
    <tr>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        {index}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
      >
        {price.toString().replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        {((price * quantity).toFixed(2)).toString().replace('.', ',')}
      </td>
    </tr>
  );
}
