import React, { useEffect, useState } from 'react';

export default function AllOrders() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const objUser = JSON.parse(localStorage.getItem('user'));
    setUser(objUser);
  }, []);
  return (
    <p>Oie</p>
  );
}
