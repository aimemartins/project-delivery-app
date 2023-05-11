import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import { requestData } from '../services/requests';

function CustumerProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    requestData('/products').then((result) => {
      const productsData = result.map((product) => ({
        ...product, quantity: 0,
      }));
      setProducts(productsData);
    });
  };

  useEffect(() => getProducts(), []);

  localStorage.setItem('cart', JSON.stringify(products));

  return (
    <div>
      <Header />
      { products.map((card) => <Card key={ card.id } card={ card } />) }
    </div>
  );
}

export default CustumerProducts;
