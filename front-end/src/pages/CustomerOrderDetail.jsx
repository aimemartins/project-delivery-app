import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestData } from '../services/requests';

export default function CustomerOrderDetail() {
  const [headerObj, setHeaderObj] = useState({});
  const [productsArray, setProductsArray] = useState([]);
  const { id } = useParams();

  const getSale = async () => {
    try {
      const data = await requestData(`/sales/products/${id}`);

      const newHeadObj = {
        id: data.id,
        seller: data.seller.name,
        date: data.saleDate,
        status: data.status,
      };

      const products = data.products.map((e) => ({
        name: e.name,
        price: e.price,
        quantity: e.SaleProduct.quantity,
      }));
      setHeaderObj(newHeadObj);
      setProductsArray(products);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1>Detalhes do Pedido</h1>
      <p>Oi</p>

    </>
  );
}
