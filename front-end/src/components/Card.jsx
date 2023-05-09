import React, { useEffect, useState } from 'react';
import { requestData } from '../services/requests';

function Card() {
  const [card, setCard] = useState([]);

  const products = async () => {
    try {
      const produ = await requestData('/products');
      return setCard(produ);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    products();
  }, []);

  return (
    <div>
      <span>
        {card.map((p) => <h3 key={ p.id }>{ p.price }</h3>)}
      </span>
      <span>
        {card.map((n) => <p key={ n.id }>{n.name}</p>)}
      </span>
    </div>
  );
}

export default Card;
