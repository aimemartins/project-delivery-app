import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import UserList from '../components/UserList';
import { requestLogin, requestData } from '../services/requests';
import verifyLogin from '../utils/validateLogin';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [failedRegister, setFailedRegister] = useState(false);
  const [isDisabled, setIsDisable] = useState(true);
  const [role, setRole] = useState('customer');
  const [users, setUsers] = useState([]);
  // const {
  //   users,
  // } = useContext(AppContext);
  const numberTwelve = 12;

  const getUsers = async () => {
    try {
      const newUsers = await requestData('/users');
      setUsers(newUsers);
    } catch (e) {
      console.log(e.message);
    }
  };

  const register = async (event) => {
    event.preventDefault();

    try {
      await requestLogin('/admin/user', { email, password, name, role });
      setEmail('');
      setPassword('');
      setName('');
      setIsDisable(true);
      getUsers();
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

  useEffect(() => {
    getUsers();
  }, []);

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
        <h2>Lista de usuários</h2>
        <br />
        <h3>Item</h3>
        <h3>Nome</h3>
        <h3>E-mail</h3>
        <h3>Tipo</h3>
        <h3>Excluir</h3>
        {
          (!users) ? ''
            : users.map((user) => (
              <UserList
                key={ user.id }
                id={ user.id }
                name={ user.name }
                email={ user.email }
                role={ user.role }
              />
            ))
        }
      </section>
    </>
  );
}
