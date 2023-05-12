import React from 'react';
// import { requestData } from '../services/requests';
// import { requestData } from '../services/requests';

// informações que eu devo pegar do localStorage
// productName
// quantity
// informações que eu devo pegar do backend

function CheckoutList() {
  // const [product, setProduct] = useState(localStorage.getItem('chosenProducts'));

  // const getProducts = async () => {
  //   const products = await requestData('/produts');
  //   return products;
  // };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sum</td>
            <td>$180</td>
          </tr>
        </tfoot>
      </table>
      <div>
        <p>Item</p>
      </div>
      <div>
        <p>Descrição</p>
      </div>
      <div>
        <p>Quantidade</p>
      </div>
      <div>
        <p>Valor Unitário</p>
      </div>
      <div>
        <p>Sub-Total</p>
      </div>
      <div>
        <p>Remover</p>
      </div>
    </div>
  );
}

export default CheckoutList;
