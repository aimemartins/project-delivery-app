import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import verifyLogin from '../utils/validateLogin';
import { requestLogin, setToken } from '../services/requests';
import '../css/Login.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [failedRegister, setFailedRegister] = useState(false);
  const [isDisabled, setIsDisable] = useState(true);
  const numberTwelve = 12;
  const history = useHistory();

  const register = async (event) => {
    event.preventDefault();

    try {
      await requestLogin('/users', { email, password, name });

      const data = await requestLogin('/login', { email, password });
      setUser(data);
      setToken(user.token);
      // localStorage.setItem('token', token);
      // localStorage.setItem('user', data);
      history.push('/customer/products');
    } catch (error) {
      console.log(error.message);
      setFailedRegister(true);
      setIsDisable(true);
    }
  };

  useEffect(() => {
    if (verifyLogin(email, password) && name.length >= numberTwelve) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [email, password, name]);

  return (
    <section id="login">
      <form className="card">
        <div className="card-register">
          <h2>Cadastro</h2>
        </div>
        <label
          htmlFor="name-input"
          className="card-content-area"
        >
          <input
            className="card-header"
            type="text"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
            data-testid="common_register__input-name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email-input" className="card-content-area">
          <input
            className="card-header"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password-input" className="card-content-area">
          <input
            className="card-header"
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="common_register__input-password"
            placeholder="*******"
          />
        </label>
        <div className="card-footer">
          <button
            className="submit"
            data-testid="common_register__button-register"
            type="submit"
            disabled={ isDisabled }
            onClick={ (event) => register(event) }
          >
            Cadastrar
          </button>
        </div>
      </form>
      {
        (failedRegister)
          ? (
            <p data-testid="common_register__element-invalid_register">
              {
                `Os dados do usuário que informou não estão corretos.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
    </section>
  );
}
