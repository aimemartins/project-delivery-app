import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestData } from '../services/requests';
import CustomerOrderHeader from '../components/CustomerOrderHeader';
import CustomerOrderProducts from '../components/CustomerOrderProducts';

export default function CustomerOrderDetail() {
  const [headerObj, setHeaderObj] = useState({});
  const [productsArray, setProductsArray] = useState([]);
  const [requestMade, setRequestMade] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();

  async function getSale() {
    try {
      const myData = await requestData(`/sales/products/${id}`);
      setData(myData);
      const newHeadObj = {
        id: myData.id,
        seller: myData.seller.name,
        date: myData.saleDate,
        status: myData.status,
      };
      const products = myData.products.map((e) => ({
        name: e.name,
        price: e.price,
        quantity: e.SaleProduct.quantity,
      }));
      setHeaderObj(newHeadObj);
      setProductsArray(products);
      setRequestMade(true);
    } catch (e) {
      console.log(e);
      setRequestMade(false);
    }
  }

  useEffect(() => {
    getSale();
  }, []);

  if (!requestMade) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <>
      <h1>Detalhes do Pedido</h1>
      <CustomerOrderHeader sale={ headerObj } />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        {productsArray.map((e, i) => (
          <CustomerOrderProducts
            key={ i + 1 }
            index={ i + 1 }
            name={ e.name }
            price={ e.price }
            quantity={ e.quantity }
          />
        ))}
      </table>
      <h2 data-testid="customer_order_details__element-order-total-price">
        {data.totalPrice.replace('.', ',')}
      </h2>
    </>
  );
}
