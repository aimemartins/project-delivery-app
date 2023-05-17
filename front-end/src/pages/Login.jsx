import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import verifyLogin from '../utils/validateLogin';
import { requestLogin, setToken } from '../services/requests';
// import { positiveLogo } from '../images';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const history = useHistory();

  const login = async (event) => {
    event.preventDefault();

    try {
      const data = await requestLogin('/login', { email, password });

      setToken(data.token);
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    if (verifyLogin(email, password)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [email, password, isDisable]);

  useEffect(() => {
    console.log(isLogged);
    if (isLogged) {
      console.log(user);
      switch (user.role) {
      case 'seller':
        return history.push('/seller/orders');
      case 'administrator':
        return history.push('/admin/manage');
      default: history.push('/customer/products');
        break;
      }
    }
  }, [isLogged, user, history]);

  return (
    <>

      <form>
        <label htmlFor="email-input">
          <input
            className="common_login__input-email"
            type="email"
            id="email"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="common_login__input-email"
            placeholder="Login"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="common_login__input-password"
            placeholder="Senha"
          />
        </label>

        <button
          data-testid="common_login__button-login"
          type="submit"
          onClick={ (event) => login(event) }
          disabled={ isDisable }
        >
          Login
        </button>

        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Registrar
        </button>
      </form>
      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              {
                `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
    </>
  );
}

export default Login;
