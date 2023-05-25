import React from 'react';

export default function SellerOrderDetails(params) {
  const {
    index,
    name,
    price,
    quantity,
  } = params;
  return (
    <tbody>
      <tr>
        <td
          data-testid={ `
          seller_order_details__element-order-table-item-number-${index}` }
        >
          {index}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-name-${index}` }
        >
          {name}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
        >
          {quantity}
        </td>
        <td
          data-testid={
            `seller_order_details__element-order-table-unit-price-${index}`
          }
        >
          {price.toString().replace('.', ',')}
        </td>
        <td
          data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
        >
          {((price * quantity).toFixed(2)).toString().replace('.', ',')}
        </td>
        <td
          data-testid={
            `seller_checkout__element-order-table-sub-total-${index}`
          }
        >
          {((price * quantity).toFixed(2)).toString().replace('.', ',')}

        </td>
      </tr>

    </tbody>
  );
}
