import React, { useEffect, useState } from 'react';
import { requestData } from '../services/requests';

function InputAddress() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const loadingSellers = async () => {
    try {
      const data = await requestData('/users');
      const result = data.filter((user) => user.role === 'seller');
      setSellers(result);
    } catch (error) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    loadingSellers();
  }, []);

  useEffect(() => {
    if (address && addressNumber) {
      localStorage.setItem('deliveryAddress', JSON.stringify(address));
      localStorage.setItem('deliveryNumber', JSON.stringify(addressNumber));
    }
  }, [address, addressNumber]);

  function getSeller(e) {
    localStorage.setItem('seller', JSON.stringify(e.target.value));
  }

  return (
    <div>
      <div>
        <label htmlFor="inputSeller">
          {' '}
          Vendedor:
          <select
            id="inputSeller"
            data-testid="customer_checkout__select-seller"
            // value={ sellerId }
            onChange={ (e) => getSeller(e) }
          >
            <option>---</option>
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
            value={ address }
            onChange={ ({ target: { value } }) => setAddress(value) }
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
            value={ addressNumber }
            onChange={ ({ target: { value } }) => setAddressNumber(value) }
            data-testid="customer_checkout__input-address-number"
          />
        </label>
      </div>

    </div>
  );
}

export default InputAddress;
