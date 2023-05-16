import React, { useEffect, useState } from 'react';

function CheckoutList() {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const dismountJson = JSON.parse(localStorage.getItem('cart') || []);
    setProductList(dismountJson);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (error) {
      console.log(e.message);
    }
  }, []);

  function loadingTotal() {
    const total = productList.reduce((acc, product) => acc + product.subTotal, 0);
    const totalFixed = total.toFixed(2);
    localStorage.setItem('totalPrice', JSON.stringify(totalFixed));
    return totalFixed.toString().replace('.', ',');
  }

  useEffect(() => {
    loadingTotal();
  }, [productList]);

  function removeProduct(index) {
    const newProductList = productList.filter((product, i) => i !== index);
    setProductList(newProductList);
    localStorage.setItem('cart', JSON.stringify(newProductList));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => {
            const itemNumber = index + 1;
            return (
              <tr
                key={ index }
              >
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {itemNumber}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {product.name}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {product.quantity}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {(product.price).toString().replace('.', ',')}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {((product.subTotal).toFixed(2)).toString().replace('.', ',')}

                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  <button
                    type="button"
                    onClick={ () => removeProduct(index) }
                  >
                    Remover
                  </button>

                </td>
              </tr>
            );
          })}

        </tbody>

      </table>

      <div data-testid="customer_checkout__element-order-total-price">
        {' '}
        Total R$:
        {/* {productList.length !== [] ? loadingTotal() : ''} */}
        {loadingTotal() === '0,00' ? '' : loadingTotal()}
      </div>

    </div>
  );
}

export default CheckoutList;
