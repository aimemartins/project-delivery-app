import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Card({ card }) {
  const [productQuant, setProductQuant] = useState(card.quantity);

  const setCart = () => {
    const carrinho = JSON.parse(localStorage.getItem('cart'));
    const newCart = carrinho.filter((e) => e.id !== card.id);
    const newItem = {
      id: card.id,
      quantity: card.quantity,
      name: card.name,
      price: card.price,
      subTotal: card.quantity * card.price,
    };
    newCart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const increment = () => {
    setProductQuant(productQuant + 1);
    card.quantity += 1;
    setCart();
  };

  const decrement = () => {
    if (card.quantity === 0) return 0;
    setProductQuant(productQuant - 1);
    card.quantity -= 1;
    setCart();
  };

  useEffect(() => localStorage.setItem('cart', JSON.stringify([])), []);

  return (
    <section>
      <div data-testid>
        <p
          data-testid={ `customer_products__element-card-price-${card.id}` }
        >
          { card.price.replace('.', ',') }

        </p>
        <img
          data-testid={ `customer_products__img-card-bg-image-${card.id}` }
          src={ card.url_image }
          alt={ card.name }
          width="100"
          height="100"
        />
        <h2
          data-testid={ `customer_products__element-card-title-${card.id}` }
        >
          { card.name }

        </h2>
        <button
          data-testid={ `customer_products__button-card-rm-item-${card.id}` }
          type="button"
          onClick={ decrement }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${card.id}` }
          type="number"
          value={ card.quantity }
          onChange={ async (e) => {
            setProductQuant(e.target.value);
            card.quantity = Number(e.target.value);
            await setCart();
          } }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${card.id}` }
          type="button"
          onClick={ increment }
        >
          +
        </button>
      </div>
    </section>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
