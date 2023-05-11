import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import { requestData } from '../services/requests';
import CartButton from '../components/CartButton';

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

  console.log(products);

  return (
    <div>
      <Header />
      { products.map((card) => <Card key={ card.id } card={ card } />) }
      <CartButton />
    </div>
  );
}

export default CustumerProducts;
