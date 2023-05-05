import React, { useState, useEffect } from 'react';
import verifyLogin from '../utils/validateLogin';
// import { Redirect, } from 'react-router-dom';
// import Header from '../components/Header';
// import { requestLogin, setToken, requestData } from '../services/requests';
// import { positiveLogo } from '../images';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  // const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin] = useState(false);

  const login = async (event) => {
    event.preventDefault();

    try {
      // const { token } = await requestLogin('/login', { email, password });

      // setToken(token);

      // const { role } = await requestData('/login/role', { email, password });

      // localStorage.setItem('token', token);
      // localStorage.setItem('role', role);

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

  // if (isLogged) return <Redire to="/matches" />;

  return (
    <>
      <p>oi</p>
      <form>
        <label htmlFor="email-input">
          <input
            className="common_login__input-email"
            type="text"
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
          type="submit"
          onClick={ (event) => login(event) }
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
