import React, { useEffect, useState } from 'react';
import { requestData } from '../services/requests';

function Card() {
  const [card, setCard] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const products = async () => {
    try {
      const produ = await requestData('/products');
      return setCard(produ);
    } catch (error) {
      return error;
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  console.log(quantity);

  useEffect(() => {
    products();
  }, []);

  return (
    <section>
      <div>
        <p>{ price }</p>
        <img src={ url_image } alt={ name } width="100" height="100" />
        <h2>{ p.name }</h2>
        <button type="submit" onClick={ decrement }>-</button>
        <input
          type="number"
          value={ quantity }
          onChange={ (e) => setQuantity(e.target.value) }
        />
        <button type="submit" onClick={ increment }>+</button>
      </div>
    </section>
  );
}

export default Card;
