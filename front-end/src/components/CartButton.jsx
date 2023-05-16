import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function CartButton() {
  const [subTotal, setSubTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const numberTen = 10;
  const history = useHistory();

  const sumTotal = () => {
    setTimeout(() => {
      const carrinho = JSON.parse(localStorage.getItem('cart'));

      if (!carrinho) return setIsDisabled(true);
      const priceArray = carrinho.map((e) => e.subTotal);

      if (priceArray.length === 0) return setIsDisabled(true);

      const total = priceArray.reduce((a, c) => a + c);
      setSubTotal(total.toFixed(2));
      setIsDisabled(false);
    }, numberTen);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((e) => e.addEventListener('click', () => {
      sumTotal();
    }));
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    inputs.forEach((e) => e.addEventListener('input', () => {
      sumTotal();
    }));
  }, []);
  return (
    <div>
      <button
        type="button"
        disabled={ isDisabled }
        onClick={ () => history.push('/customer/checkout') }
        data-testid="customer_products__button-cart"
      >
        Ver Carrinho: R$
        <p data-testid="customer_products__checkout-bottom-value">
          { subTotal.toString().replace('.', ',') }
        </p>
      </button>
    </div>
  );
}

export default CartButton;
