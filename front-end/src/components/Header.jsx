import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  const [username] = useState(localStorage.getItem('user'));
  const [setIsLogged] = useState(false);
  const history = useHistory();
  const path = history.location.pathname;

  const objUser = JSON.parse(username);

  const customerProducts = () => {
    if (path.includes('customer')) {
      return (
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </Link>
      );
    }
  };

  const requestOrders = () => {
    if (path.includes('customer')) {
      return (
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
      );
    } if (path.includes('seller')) {
      return (
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          Pedidos
        </Link>
      );
    }
    return (
      <Link
        to="/admin/manage"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar Usuários
      </Link>
    );
  };

  const logout = async (event) => {
    console.log('oie');
    event.preventDefault();
    try {
      // localStorage.removeItem('token');
      localStorage.removeItem('user');
      history.push('/login');
      setIsLogged(false);
    } catch (error) {
      setIsLogged(true);
    }
  };
  return (
    <nav>
      <div>
        {customerProducts()}
      </div>
      <div>
        {requestOrders()}
      </div>
      <div />
      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {objUser.name}
        </p>
      </div>
      <div>
        <Link
          to="/login"
          onClick={ (event) => logout(event) }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </div>

    </nav>
  );
}

export default Header;
