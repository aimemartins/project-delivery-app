import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SellerCard from '../components/SellerCard';
import { requestData } from '../services/requests';

function SellerOrder() {
  const getId = JSON.parse(localStorage.getItem('user'));
  const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState([]);
  const getSales = () => {
    requestData(`/sales/seller/${getId.id}`)
      .then((result) => setSales(result)).finally(() => setLoading(false));
  };
  useEffect(() => getSales(), []);
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        {loading ? <p> Loading...</p>
          : (sales !== undefined && sales.map((sale) => (
            <SellerCard
              key={ sale.id }
              { ...sale }
            />)))}
      </div>
    </section>
  );
}

export default SellerOrder;
