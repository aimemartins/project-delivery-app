import React, { useEffect, useState } from 'react';

function CheckoutList() {
  const [productList, setProductList] = useState([]);
  const [loadedProducts, setLoadedProducts] = useState(false);
  console.log(productList);
  console.log('fora do useeffect', loadedProducts);

  const getProducts = async () => {
    const dismountJson = JSON.parse(localStorage.getItem('cart') || []);
    setProductList(dismountJson);
  };

  useEffect(() => {
    try {
      getProducts();
      if (loadedProducts.length !== []) {
        setLoadedProducts(true);
      }
      console.log('dentro do useeffect', loadedProducts);
    } catch (error) {
      console.log(e.message);
    }
  }, []);

  function loadingTotal() {
    const total = productList.reduce((acc, product) => acc + product.subTotal, 0);
    const totalFixed = total.toFixed(2);
    return totalFixed.toString().replace('.', ',');
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
          {productList.map((product, index) => (
            <tr
              key={ product.id }
            >
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {product.id}

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
                {product.price}

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {product.subTotal}

              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                <button type="button">
                  Remover
                </button>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

      <div>
        {' '}
        Total R$:
        {productList.length !== [] ? loadingTotal() : ''}
      </div>

    </div>
  );
}

export default CheckoutList;
