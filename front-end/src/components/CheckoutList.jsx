import React, { useEffect, useState } from 'react';

function CheckoutList() {
  const [productList, setProductList] = useState([]);
  const [loadedProducts, setLoadedProducts] = useState(false);
  console.log(productList);

  const getProducts = async () => {
    const dismountJson = JSON.parse(localStorage.getItem('cart'));
    setProductList(dismountJson);
  };

  useEffect(() => {
    try {
      getProducts();
      setLoadedProducts(true);
    } catch (error) {
      setLoadedProducts(false);
    }
  }, []);

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
        {/* { loadedProducts
          ? (productList.map((product) => {
            const subtotal = product.subTotal;
            const total = subtotal.reduce((acc, curr) => acc + curr, 0);
            return total;
          })) : ''} */}
      </div>

    </div>
  );
}

export default CheckoutList;
