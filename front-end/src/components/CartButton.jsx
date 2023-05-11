import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CartButton() {
  const [subTotal, setSubTotal] = useState(0);

  const sumTotal = () => {
    const carrinho = JSON.parse(localStorage.getItem('cart'));
    if (!carrinho) return null;
    const total = carrinho.reduce((acc, curr) => acc.subTotal + curr.subTotal, 0);
    setSubTotal(total);
  };

  useEffect(() => sumTotal());

  console.log(subTotal);

  return (
    <div>
      <Link
        to="/customer/checkout"
      >
        Ver Carrinho: R$
        { subTotal }
      </Link>
    </div>
  );
}

export default CartButton;
