import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { requestData, requestDeleteUser } from '../services/requests';

export default function UserList() {
  const {
    users,
    setUsers,
  } = useContext(AppContext);

  const handleDelete = async (id) => {
    try {
      await requestDeleteUser(`/users/${id}`);
      const newUsers = await requestData('/users');

      setUsers(newUsers);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <h2>Lista de usuários</h2>
      <br />
      <h3>Item</h3>
      <h3>Nome</h3>
      <h3>E-mail</h3>
      <h3>Tipo</h3>
      <h3>Excluir</h3>
      {
        (users.map((e) => (
          <div className="user_list" key={ e.id }>
            <h2>{e.id}</h2>
            <h2>{e.name}</h2>
            <h3>{e.email}</h3>
            <h3>{e.role}</h3>
            <button
              type="button"
              onClick={ () => handleDelete(e.id) }
            >
              Excluir
            </button>
          </div>
        )))
      }
    </>
  );
}
