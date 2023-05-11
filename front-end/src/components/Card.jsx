import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({ card }) {
  const [productQuant, setProductQuant] = useState(card.quantity);

  const increment = () => {
    setProductQuant(productQuant + 1);
    card.quantity += 1;
  };

  const decrement = () => {
    if (card.quantity === 0) return 0;
    setProductQuant(productQuant - 1);
    card.quantity -= 1;
  };

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
          onChange={ (e) => setProductQuant(e.target.value) }
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
