import React, { useEffect, useState } from 'react';
import { requestData } from '../services/requests';

function InputAddress() {
  const [sellers, setSellers] = useState([]);

  const loadingSellers = async () => {
    try {
      const data = await requestData('/users');
      const result = data.filter((user) => user.role === 'seller');
      setSellers(result);
      console.log(result);
    } catch (error) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    loadingSellers();
  }, []);

  return (
    <div>
      <p>olá</p>
      <div>
        <label htmlFor="inputSeller">
          {' '}
          Vendedor:
          <select id="inputSeller" data-testid="customer_checkout__select-seller">
            {sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
                type="text"
                id={ seller.id }
              >
                {seller.name}
              </option>))}

          </select>

        </label>
      </div>
      <div>
        <label htmlFor="address">
          {' '}
          Endereço:
          <input
            type="text"
            id="address"
            // value={ email }
            // onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="customer_checkout__input-address"
          />
        </label>
      </div>
      <div>
        <label htmlFor="address_number">
          {' '}
          Número:
          <input
            type="text"
            id="address_number"
            // value={ email }
            // onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="customer_checkout__input-address-number"
          />
        </label>
      </div>

    </div>
  );
}

export default InputAddress;
