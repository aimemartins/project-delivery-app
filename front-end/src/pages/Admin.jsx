import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import UserList from '../components/UserList';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [failedRegister, setFailedRegister] = useState(false);
  const [isDisabled, setIsDisable] = useState(true);
  const [role, setRole] = useState('customer');
  // const history = useHistory();

  const register = async (event) => {
    event.preventDefault();

    try {
      await requestLogin('/users', { email, password, name });
      setEmail('');
      setPassword('');
      setName('');
      setIsDisable(true);
    } catch (error) {
      console.log(error.message);
      setFailedRegister(true);
      setIsDisable(true);
    }
  };

  return (
    <>
      <Header />
      <div className="error_area">
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
      </div>
      <section className="register_new_user">
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              className="admin_manage__input-name"
              type="text"
              value={ name }
              onChange={ ({ target: { value } }) => setName(value) }
              data-testid="admin_manage__input-name"
              placeholder="Seu nome"
            />
          </label>
          <label htmlFor="email-input">
            <input
              className="admin_manage__input-email"
              type="text"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              data-testid="admin_manage__input-email"
              placeholder="seu-email@site.com.br"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
              data-testid="admin_manage__input-password"
              placeholder="*******"
            />
          </label>
          <select
            name="user_role"
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ ({ target: { value } }) => setRole(value) }
          >
            <option value="administrator">Admin</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
          <button
            data-testid="admin_manage__button-register"
            type="submit"
            disabled={ isDisabled }
            onClick={ (event) => register(event) }
          >
            Cadastrar
          </button>
        </form>
      </section>
      <section>
        <UserList />
      </section>
    </>
  );
}